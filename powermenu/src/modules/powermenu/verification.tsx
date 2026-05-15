import Gtk from "gi://Gtk";
import app from "ags/gtk4/app"
import PowerMenu from "powermenu/src/services/powermenu";
import { createBinding, createState } from "ags";
import { hideWindows, windows_names } from "@/windows";
import { config, theme } from "@/options";
import { bash } from "@/src/lib/utils";
import Pango from "gi://Pango?version=1.0";
import Adw from "gi://Adw?version=1";
const powermenu = PowerMenu.get_default();


export function UpdateLabel() {
   const [countdown, setCountdown] = createState(5);

   setInterval(() => {
      setCountdown(prev => {
         const next = prev - 1;
         return next;
      });
   }, 1000);

   // const label = createBinding(powermenu, "title").as(
   //    (title) => {
   //       const prefix =
   //          title === "Sleep"   ? "The system will sleep automatically in" :
   //          title === "Reboot"  ? "The system will restart automatically in" :
   //          title === "Shutdown"? "The system will shut down automatically in" :
   //          title === "Logout"  ? "The user will be logged out automatically in":
   //          "";
// 
   //       return `${prefix}`;
   //    }
   // );

   // Derive the full label string as a binding
   const label = countdown.as(
      (n) => `${createBinding(powermenu, "label")()} ${n} seconds`
   );

   return label;
}


export function VerificationModule() {
   
   return (
      <box orientation={Gtk.Orientation.VERTICAL} spacing={20}>
         <label label={createBinding(powermenu, "title")} class={"title"} />
         <Adw.Clamp maximumSize={400}>
            <label
               label={UpdateLabel()}
               wrap
               justify={Gtk.Justification.CENTER}
               wrapMode={Pango.WrapMode.CHAR}
               class={"label"}
            />
         </Adw.Clamp>
         <box homogeneous={true} spacing={theme.spacing}>
            <button
               label={"Cancel"}
               focusOnClick={false}
               onClicked={() => {
                  powermenu.cancelAction();
                  // hideWindows();
                  app.get_window(windows_names.verification)?.hide();
                  app.get_window(windows_names.powermenu)?.show();
               }}
            />
         </box>
      </box>
   );
}
