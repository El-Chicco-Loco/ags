import app from "ags/gtk4/app"
// import "../_common/src/services/styles"
import PowerMenu from "./src/widgets/powermenu"
const css = "/home/alienware/.config/ags/_common/shell/main.css";

app.start({
  icons: "../_common/assets/icons",
  instanceName: "powermenu",
  main() {
    app.apply_css(css, true);
    app.get_monitors().map(PowerMenu)
  },
})
