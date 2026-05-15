import app from "ags/gtk4/app"
import { Astal, Gtk, Gdk } from "ags/gtk4"
import { execAsync } from "ags/process"
import { createPoll } from "ags/time"


function Box1() {
  let counter = 0

  const button = new Gtk.Button()
  // const icon = new Gtk.Image({
  //   iconName: "system-search-symbolic",
  // })
  // const label = new Gtk.Label({
  //   label: `clicked ${counter} times`,
  // })
  const box = new Gtk.Box({
    orientation: Gtk.Orientation.VERTICAL,
  })
// 
  function onClicked() {
    // label.label = `clicked ${counter} times`
    console.log("echo ciao")
  }

  // button.set_child(icon)
  box.append(button)
  // box.append(label)
  button.connect("clicked", onClicked)
  return box
}


export function Bar(gdkmonitor: Gdk.Monitor) {
  const time = createPoll("", 1000, "date")
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor

  return (
    <window
      visible
      name="bar2"
      class="Bar"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={TOP | LEFT | RIGHT}
      application={app}
    >
      <centerbox cssName="centerbox">
        <menubutton $type="center" hexpand halign={Gtk.Align.CENTER}>
          <label label={time} />
          <popover>
            <Gtk.Calendar />
          </popover>
        </menubutton>

        <menubutton $type="end" hexpand halign={Gtk.Align.END}>
          <Box1 />
        </menubutton>
      </centerbox>
    </window>
  )
}
