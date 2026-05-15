import { config } from "_common/options";
import { windows_names } from "_common/windows";
import GObject, { getter, property, register, signal } from "ags/gobject";
import app from "ags/gtk4/app";
import GLib from "gi://GLib?version=2.0";
import { Timer } from "_common/src/lib/timer";
import { bash } from "_common/src/lib/utils";
import { timeout } from "ags/time";

const user = await GLib.getenv("USER");

const commands = {
   sleep: "echo sleep", // systemctl suspend",
   reboot: "echo reboot", //systemctl reboot",
   logout: `loginctl terminate-user ${user}`,
   shutdown: "shutdown now",
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
   #timer = new Timer(5 * 1000);

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
            `${user} will be sleep automatically in 5 seconds`,
         ],
         Reboot: [
            commands.reboot,
            "Reboot",
            "The system will restart automatically in 5 seconds",
         ],
         Logout: [
            commands.logout,
            "Log Out",
            `${user} will be logged out automatically in 5 seconds`,
         ],
         Shutdown: [
            commands.shutdown,
            "Shutdown",
            "The system will shutdown automatically in 5 seconds",
         ],
      }[action]!;

      this.notify("cmd");
      this.notify("title");
      this.notify("label");
      app.get_window(windows_names.powermenu)?.hide();
      app.get_window(windows_names.verification)?.show();

      this.#timer.reset();
      this.#timer.start();
   }
}
