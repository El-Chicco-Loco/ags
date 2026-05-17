import app from "ags/gtk4/app"
import { windows_names } from "@/windows";
import request from "@/request";
import {PowerMenuWindow} from "./src/windows/powermenu"
const css = "/home/alienware/.config/ags/common/style/main.css";

app.start({
  icons: "/home/alienware/.config/ags/common/assets/icons",
  instanceName: "powermenu",
  main() {
    app.apply_css(css, true);
    app.get_monitors().map(PowerMenuWindow)
    app.get_window(windows_names.powermenu)?.show();
  },
    requestHandler(argv, response) {
    request(argv, response);
  },
})
