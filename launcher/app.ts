import app from "ags/gtk4/app";
import "@/src/services/styles";
import request from "./request";
import { config } from "./options";
import { windows } from "./windows";
import { AppLauncherWindow } from "./src/windows/applauncher";

app.start({
   icons: `${DATADIR ?? SRC}/assets/icons`,
   instanceName: "applauncher",
   main() {
      windows();
   },
   requestHandler(argv, response) {
      request(argv, response);
   },
});
