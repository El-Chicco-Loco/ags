import { config } from "@/options";
import { windows_names } from "@/windows";
import GObject, { getter, property, register, signal } from "ags/gobject";
import app from "ags/gtk4/app";
import { Timer } from "@/src/lib/timer";
import { bash } from "@/src/lib/utils";
import { interval, timeout, idle, createPoll } from "ags/time"
import { createBinding, createState } from "ags";
import {PowerMenuWindow, VerificationWindow} from "../windows/powermenu"







const commands = {
   sleep: "echo .", // "systemctl suspend",
   reboot: "echo .", // "systemctl reboot",
   logout: "echo .", // "loginctl terminate-user ${user}",
   shutdown: "echo .", // "shutdown now",
};

@register({ GTypeName: "PowerMenu" })
export default class PowerMenu extends GObject.Object {
   static instance: PowerMenu;

   static get_default() {
      if (!this.instance) this.instance = new PowerMenu();
      return this.instance;
   }

   constructor() {
      super();
      this.#timer.subscribe(async () => {
         if (this.#timer.timeLeft <= 0) {
            this.executeCommand();
         }
      });
   }

   #title = "";
   #label = "";
   #cmd = "";
   #timer = new Timer(4000);


   countdown = 5;

   updateCounter() {
      interval(1000, () => {
         this.countdown -= 1;
      })
   }

   @getter(String)
   get title() {
      return this.#title;
   }

   @getter(String)
   get label() {
      return this.#label;
   }

   @getter(String)
   get cmd() {
      return this.#cmd;
   }

   get timer() {
      return this.#timer;
   }

   async executeCommand() {
      this.#timer.cancel();
      await bash(this.#cmd);
      app.get_window(windows_names.verification)?.hide();
   }

   cancelAction() {
      this.#timer.cancel();
      app.get_window(windows_names.verification)?.hide();
   }

   async action(action: string) {
      [this.#cmd, this.#title, this.#label] = {
         Sleep: [
            commands.sleep,
            "Sleep",
            `The system will sleep automatically in`,
         ],
         Reboot: [
            commands.reboot,
            "Reboot",
            `The system will restart automatically in`,
         ],
         Logout: [
            commands.logout,
            "Log Out",
            `The user will be logged out automatically in`,
         ],
         Shutdown: [
            commands.shutdown,
            "Shutdown",
            `The system will shutdown automatically in`,
         ],
      }[action]!;

      this.notify("cmd");
      this.notify("title");
      this.notify("label");
      app.get_window(windows_names.powermenu)?.hide();
      // app.get_window(windows_names.verification)?.show();
      app.get_monitors().map(VerificationWindow)
      app.get_window(windows_names.verification)?.show();

      this.#timer.reset();
      this.#timer.start();
      this.updateCounter()
   }
}
