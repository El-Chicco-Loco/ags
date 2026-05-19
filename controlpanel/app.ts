import app from "ags/gtk4/app";
import "@/src/services/styles";
import request from "./request";
import { config } from "./options";
import { windows } from "./windows";

app.start({
   icons: "/home/alienware/.config/ags/bar/assets/icons",
   // css: `/home/alienware/.config/ags/common/style/main.css`,
   instanceName: "controlpanel",
   main() {
      windows();
   },
   requestHandler(argv, response) {
      request(argv, response);
   },
});
