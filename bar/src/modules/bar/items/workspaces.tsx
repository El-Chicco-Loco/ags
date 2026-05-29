import { Gdk, Gtk } from "ags/gtk4";
import { createBinding, createComputed, For } from "ags";
import { compositor } from "@/src/lib/compositor";
import { config, theme } from "@/options";
import { attachHoverScroll, getAppInfo, truncateByFormat } from "@/src/lib/utils";
import { icons } from "@/src/lib/icons";
import BarItem, { FunctionsList } from "@/src/widgets/baritem";
import { isVertical, orientation } from "../bar";

export function Workspaces({ gdkmonitor }: { gdkmonitor: Gdk.Monitor }) {
   if (!compositor.isHyprland() && !compositor.isNiri()) {
      console.warn("Bar: workspaces module skipped: no compositor available");
      return <box visible={false} />;
   }

   const conf = config.bar.modules.workspaces;
   const workspaces = compositor.monitorWorkspaces(gdkmonitor);
   const focusedWorkspace = compositor.focusedWorkspace();
   // const focusedWindow = compositor.focusedWindow();


   function WorkspaceButton({ ws }: { ws: any }) {
      const windows = compositor.workspaceWindows(ws);
      const windowCount = windows((w) => w.length);

      const visible = createComputed(() => {
         if (conf["hide-empty"]) {
            const focused = focusedWorkspace();
            return (
               windowCount() > 0 ||
               (focused &&
                  compositor.workspaceId(focused) ===
                     compositor.workspaceId(ws))
            );
         }
         return true;
      });

      const classNames = focusedWorkspace((fws) => {
         const classes = ["bar-item", "workspaces"];
         if (
            fws &&
            compositor.workspaceId(fws) === compositor.workspaceId(ws)
         ) {
            classes.push("active");
         }
         if (!conf["workspace-format"].includes("{windows}"))
            classes.push("minimal");
         if (windowCount() === 0) classes.push("empty");
         return classes;
      });

      let space = focusedWorkspace((fws) => {
         const pos = compositor.workspaceId(ws) - compositor.workspaceId(fws);
         let sp = 0;
         if (compositor.workspaceId(ws) === 1) {
            sp = 860 + pos*(theme.bar.spacing + 27);
         }
         return sp;
      });

      let opacity = focusedWorkspace((fws) => {
         const pos = Math.abs(compositor.workspaceId(ws) - compositor.workspaceId(fws));
         let offset = 0.75;
         if (compositor.workspaceId(fws) === compositor.workspaceId(ws)) {
            offset = 1;
         }
         let opacity = offset - pos*0.25;
         return opacity;
      });


      return <BarItem
            cssClasses={classNames}
            onPrimaryClick={/* () => compositor.focusWorkspace(ws) */''}
            format={conf["workspace-format"]}
            visible={visible}
            marginStart={space}
            opacity={opacity}
            data={{
               id: (
                  <label
                     label={compositor.workspaceId(ws).toString()}
                     hexpand={isVertical}
                  />
               )
            }}
         />;
   }

   return (
      <box
         spacing={theme.bar.spacing}
         orientation={orientation}
         hexpand={true}
         halign={Gtk.Align.START}
         cssClasses={["workspaces", "",]}
         $={(self) =>
            attachHoverScroll(self, ({ dx }) => {
               if (dx < 0) {
                  FunctionsList[
                     conf["on-scroll-down"] as keyof typeof FunctionsList
                  ]();
               } else if (dx > 0) {
                  FunctionsList[
                     conf["on-scroll-up"] as keyof typeof FunctionsList
                  ]();
               }
            })
         }
      >
         <For each={workspaces}>{(ws) => <WorkspaceButton ws={ws} />}</For>
      </box>
   );
}
