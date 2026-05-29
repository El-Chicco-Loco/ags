// workspaces.tsx — AGS v3 / Astal + Gnim workspace carousel
//
// Requires: astal-hyprland installed on your system
// Import:   import { WorkspaceCarousel } from "./workspaces.tsx"

import Hyprland from "gi://AstalHyprland"
import Gtk from "gi://Gtk?version=4.0"
import GLib from "gi://GLib"
import { createState, createComputed, createBinding } from "gnim"

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const VISIBLE    = 7    // visible slot count — keep odd
const ANIM_STEPS = 10   // ticks per transition
const ANIM_MS    = 12   // ms per tick  (~120 ms total)
// ─────────────────────────────────────────────────────────────────────────────

const hyprland = Hyprland.get_default()
const HALF = Math.floor(VISIBLE / 2)

function sortedIds(): number[] {
    return hyprland.workspaces
        .map((w: any) => w.id as number)
        .filter((id: number) => id > 0)
        .sort((a: number, b: number) => a - b)
}

type Slot = { id: number; label: string; active: boolean; empty: boolean }

function computeSlots(ofs: number): Slot[] {
    const ids      = sortedIds()
    const activeId = hyprland.focusedWorkspace?.id ?? -1
    const aIdx     = ids.indexOf(activeId)

    return Array.from({ length: VISIBLE }, (_, s) => {
        const idx = Math.round(aIdx - ofs + (s - HALF))
        if (aIdx < 0 || idx < 0 || idx >= ids.length)
            return { id: -1, label: "", active: false, empty: true }
        const id = ids[idx]
        return { id, label: String(id), active: id === activeId, empty: false }
    })
}

export function WorkspaceCarousel(): Gtk.Box {
    const [offset, setOffset] = createState(0)

    let animId: number | null = null

    function animateBack(startOfs: number) {
        if (animId !== null) return
        let step = 0
        animId = GLib.timeout_add(GLib.PRIORITY_DEFAULT, ANIM_MS, () => {
            step++
            const ease = 1 - Math.pow(1 - step / ANIM_STEPS, 3)
            setOffset(startOfs * (1 - ease))
            if (step >= ANIM_STEPS) {
                setOffset(0)
                animId = null
                return GLib.SOURCE_REMOVE
            }
            return GLib.SOURCE_CONTINUE
        })
    }

    function scrollWorkspace(dir: 1 | -1) {
        const ids  = sortedIds()
        const aId  = hyprland.focusedWorkspace?.id ?? -1
        const aIdx = ids.indexOf(aId)
        if (aIdx < 0) return
        const nextIdx = aIdx + dir
        if (nextIdx < 0 || nextIdx >= ids.length) return
        const flash = -dir as 1 | -1
        setOffset(flash)
        hyprland.dispatch("workspace", String(ids[nextIdx]))
        animateBack(flash)
    }

    const slots = createComputed<Slot[]>(() => {
        createBinding(hyprland, "workspaces")()
        createBinding(hyprland, "focusedWorkspace")()
        return computeSlots(offset())
    })


    // Build the box imperatively so we can attach an EventControllerScroll
    const box = new Gtk.Box({ visible: true, spacing: 6, cssClasses: ["ws-carousel"] })

    const ctrl = new Gtk.EventControllerScroll()
    ctrl.flags =
        Gtk.EventControllerScrollFlags.VERTICAL |
        Gtk.EventControllerScrollFlags.DISCRETE
    ctrl.connect("scroll", (_c: any, _dx: number, dy: number) => {
        if (dy > 0.5)       scrollWorkspace(1)
        else if (dy < -0.5) scrollWorkspace(-1)
        return false
    })
    box.add_controller(ctrl)


    // Re-render pill buttons whenever slots change
    const test = createComputed(() => {
        // Remove all existing children
        let child = box.get_first_child()
        while (child) {
            const next = child.get_next_sibling()
            box.remove(child)
            child = next
        }

        // Append fresh pills
        for (const s of slots()) {
            console.log(s)
            const btn = new Gtk.Button({
                visible: true,
                widthRequest: 28,
                sensitive: !s.empty,
                label: s.label,
                cssClasses: [
                    "ws-pill",
                    s.empty    ? "ws-empty"
                    : s.active ? "ws-active"
                    :            "ws-inactive",
                ],
            })
            if (!s.empty) {
                const id = s.id
                btn.connect("clicked", () => hyprland.dispatch("workspace", String(id)))
            }
            box.append(btn)
        }
    })

    test()

    return box
}
