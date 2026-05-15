import { BarShadowWindow, BarWindow } from "./src/windows/bar";
import app from "ags/gtk4/app";
import { config, theme } from "./options";
import { createBinding, For, onCleanup, This } from "ags";
import { Gtk } from "ags/gtk4";
import { qs_page_set } from "./src/modules/quicksettings/quicksettings";
import { AppLauncherWindow } from "./src/windows/applauncher";

export const windows_names = {
  // bar: "bar",
  // bar_shadow: "barshadow",
  applauncher: "applauncher",
};

export function hideWindows() {
  const ignore = [
    windows_names.bar,
    windows_names.bar_shadow,
    windows_names.osd,
  ];

  app
    .get_windows()
    .filter((window) => !ignore.includes(window.name))
    .forEach((w) => {
      app.get_window(w.name)?.hide();
    });
  qs_page_set("main");
}

export function windows() {
  // prettier-ignore
  const windows: Array<[condition: boolean, open: () => void]> = [
    [true, AppLauncherWindow],
  ];

  for (const [condition, open] of windows) {
    if (condition) open();
  }

  const monitors = createBinding(app, "monitors");

  <For each={monitors}>
    {(monitor) => (
      <This this={app}>
        <BarWindow
          gdkmonitor={monitor}
          $={(self) => onCleanup(() => self.destroy())}
        />
        {theme.shadow && (
          <BarShadowWindow
            gdkmonitor={monitor}
            $={(self) => onCleanup(() => self.destroy())}
          />
        )}
      </This>
    )}
  </For>;
}
