
import { Astal, Gtk, Gdk } from "ags/gtk4"
import { PowerMenuModule } from "@/src/modules/powermenu";
import { Popup } from "./popup";
import app from "ags/gtk4/app";
// import Powermenu from "../services/powermenu";
import { VerificationModule } from "@/src/modules/verification";
// const powermenu = Powermenu.get_default();

export default function PowerMenu(gdkmonitor: Gdk.Monitor) {
  return (
    <Popup name={"powermenu"}>
      <PowerMenuModule />
    </Popup>
  )
}


export function VerificationWindow() {
  // const appconnect = app.connect("window-toggled", (_, win) => {
  //   const winName = win.name;
  //   const visible = win.visible;
// 
  //   if (winName == "verification" && !visible) {
  //       powermenu.cancelAction();
  //   }
  // });

  return (
    <Popup name={"verification"}>
        <VerificationModule />
    </Popup>
  );
}
