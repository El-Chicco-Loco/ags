import app from "ags/gtk4/app";
import "./src/services/styles";
import { resetCss } from "./src/services/styles";

app.start({
   instanceName: "common",
   main() {
      resetCss();
   },
});
