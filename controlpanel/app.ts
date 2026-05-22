import app from "ags/gtk4/app";
import "@/src/services/styles";
import request from "./request";
import { config } from "./options";
import { windows } from "./windows";
import { BarWindow } from "./src/windows/bar";
import { QuickSettingsWindow } from "./src/windows/quicksettings";


app.start({
   icons: "/home/alienware/.config/ags/bar/assets/icons",
   // css: `/home/alienware/.config/ags/common/style/main.css`,
   instanceName: "controlpanel",
   main() {
      // app.apply_css(css, true);

      QuickSettingsWindow()
      app.get_monitors().map(BarWindow)
      // app.get_window("controlpanel")?.show();
   },
   requestHandler(argv, response) {
      request(argv, response);
   },
});
