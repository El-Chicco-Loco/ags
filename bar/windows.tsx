import { BarWindow } from "./src/windows/bar";
import app from "ags/gtk4/app";
import { config } from "./options";
import { createBinding, For, onCleanup, This } from "ags";
import { qs_page_set } from "./src/modules/quicksettings/quicksettings";
import { QuickSettingsWindow } from "./src/windows/quicksettings";
import { NotificationsListWindow } from "./src/windows/notificationslist";
import { NotificationsWindow } from "./src/windows/notifications";
import { hasBarItem } from "./src/lib/utils";

export const windows_names = {
  bar: "bar",
  bar_shadow: "barshadow",
  applauncher: "applauncher",
  notifications_popup: "notificationspopup",
  quicksettings: "quicksettings",
  osd: "osd",
  powermenu: "powermenu",
  verification: "verification",
  weather: "weather",
  calendar: "calendar",
  notificationslist: "notificationslist",
  volume: "volume",
  network: "network",
  bluetooth: "bluetooth",
  power: "power",
  clipboard: "clipboard",
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
  const windows: Array<[condition: boolean, open: () => void]> = [
    [true, QuickSettingsWindow],
    [config.notifications.enabled && hasBarItem("notificationslist"),    NotificationsListWindow],
    [config.notifications.enabled,                                       NotificationsWindow],
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
      </This>
    )}
  </For>;
}
