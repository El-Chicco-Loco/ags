import app from "ags/gtk4/app"
import { windows_names } from "@/windows";
import {PowerMenuWindow, VerificationWindow} from "./src/windows/powermenu"
const css = "/home/alienware/.config/ags/_common/shell/main.css";

app.start({
  icons: "/home/alienware/.config/ags/_common/assets/icons",
  instanceName: "powermenu",
  main() {
    app.apply_css(css, true);
    app.get_monitors().map(PowerMenuWindow)
    app.get_window(windows_names.powermenu)?.show();
  },
})
