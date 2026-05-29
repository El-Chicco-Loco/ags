// bar.tsx — AGS v3 bar entry point
import app from "ags/gtk4/app"
import Astal from "gi://Astal?version=4.0"
import Gtk from "gi://Gtk?version=4.0"
import { WorkspaceCarousel } from "./workspaces"

function Bar(monitor = 0) {
    const { TOP, LEFT, RIGHT } = Astal.WindowAnchor
    return (
        <window
            name={`bar-${monitor}`}
            class="bar"
            monitor={monitor}
            application={app}
            anchor={TOP | LEFT | RIGHT}
            visible
            exclusivity={Astal.Exclusivity.EXCLUSIVE}
        >
            <centerbox>
                {/* left side — add your own widgets */}
                <box hexpand halign={Gtk.Align.START} spacing={8} />

                <WorkspaceCarousel />

                {/* right side — add your own widgets */}
                <box hexpand halign={Gtk.Align.END} spacing={8} />
            </centerbox>
        </window>
    )
}

app.start({
    css: "./style.css",
    main() { Bar(0) },
})
