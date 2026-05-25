import app from "ags/gtk4/app"
import request from "@/request";
import { windows_names } from "@/windows";
import {PowerMenuWindow} from "./src/windows/powermenu"
const css = "/home/alienware/.config/ags/style/main.css";

app.start({
  icons: "/home/alienware/.icons/WhiteSur-nord-dark",
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
