/// <reference path="./json-1.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://AstalNiri?version=0.1' {

// Module dependencies
import type Json from 'gi://Json?version=1.0';
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';

export namespace AstalNiri {

    /**
     * AstalNiri-0.1
     */


    /**
     * @gir-type Enum
     */
    export namespace WorkspaceReferenceArgTag {
        export const $gtype: GObject.GType<WorkspaceReferenceArgTag>;
    }

    /**
     * @gir-type Enum
     */
    enum WorkspaceReferenceArgTag {
        ID,
        INDEX,
        NAME,
    }


    /**
     * @gir-type Enum
     */
    export namespace ColumnDisplayTag {
        export const $gtype: GObject.GType<ColumnDisplayTag>;
    }

    /**
     * @gir-type Enum
     */
    enum ColumnDisplayTag {
        NORMAL,
        TABBED,
    }


    /**
     * @gir-type Enum
     */
    export namespace SizeChangeTag {
        export const $gtype: GObject.GType<SizeChangeTag>;
    }

    /**
     * @gir-type Enum
     */
    enum SizeChangeTag {
        SETFIXED,
        SETPROPORTION,
        ADJUSTFIXED,
        ADJUSTPROPORTION,
    }


    /**
     * @gir-type Enum
     */
    export namespace LayoutSwitchTargetTag {
        export const $gtype: GObject.GType<LayoutSwitchTargetTag>;
    }

    /**
     * @gir-type Enum
     */
    enum LayoutSwitchTargetTag {
        NEXT,
        PREV,
        INDEX,
    }


    const MAJOR_VERSION: number;

    const MINOR_VERSION: number;

    const MICRO_VERSION: number;

    const VERSION: string;

    function get_default(): Niri;

    namespace Niri {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            "event-stream": (arg0: string, arg1: string) => void;
            /**
             * @signal
             */
            "workspaces-changed": (arg0: Workspace[]) => void;
            /**
             * @signal
             */
            "workspace-activated": (arg0: number, arg1: boolean) => void;
            /**
             * @signal
             */
            "workspace-active-window-changed": (arg0: number, arg1: number) => void;
            /**
             * @signal
             */
            "windows-changed": (arg0: Window[]) => void;
            /**
             * @signal
             */
            "window-opened-or-changed": (arg0: Window) => void;
            /**
             * @signal
             */
            "window-opened": (arg0: Window) => void;
            /**
             * @signal
             */
            "window-changed": (arg0: Window) => void;
            /**
             * @signal
             */
            "window-closed": (arg0: number) => void;
            /**
             * @signal
             */
            "window-focus-changed": (arg0: number) => void;
            /**
             * @signal
             */
            "window-urgency-changed": (arg0: number, arg1: boolean) => void;
            /**
             * @signal
             */
            "workspace-urgency-changed": (arg0: number, arg1: boolean) => void;
            /**
             * @signal
             */
            "overview-opened-or-closed": (arg0: boolean) => void;
            /**
             * @signal
             */
            "keyboard-layouts-changed": (arg0: string[]) => void;
            /**
             * @signal
             */
            "keyboard-layout-switched": (arg0: number) => void;
            "notify::keyboard-layout-idx": (pspec: GObject.ParamSpec) => void;
            "notify::config-load-failed": (pspec: GObject.ParamSpec) => void;
            "notify::overview": (pspec: GObject.ParamSpec) => void;
            "notify::focused-workspace": (pspec: GObject.ParamSpec) => void;
            "notify::focused-window": (pspec: GObject.ParamSpec) => void;
            "notify::focused-output": (pspec: GObject.ParamSpec) => void;
            "notify::windows": (pspec: GObject.ParamSpec) => void;
            "notify::outputs": (pspec: GObject.ParamSpec) => void;
            "notify::workspaces": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            keyboard_layout_idx: number;
            keyboardLayoutIdx: number;
            config_load_failed: boolean;
            configLoadFailed: boolean;
            overview: Overview;
            focused_workspace: (Workspace | null);
            focusedWorkspace: Workspace;
            focused_window: (Window | null);
            focusedWindow: Window;
            focused_output: (Output | null);
            focusedOutput: Output;
            windows: Window[];
            outputs: Output[];
            workspaces: Workspace[];
        }
    }

    /**
     * @gir-type Class
     */
    class Niri extends GObject.Object {
        static $gtype: GObject.GType<Niri>;

        // Properties
        get keyboard_layout_idx(): number;
        set keyboard_layout_idx(val: number);

        get keyboardLayoutIdx(): number;
        set keyboardLayoutIdx(val: number);

        get config_load_failed(): boolean;
        set config_load_failed(val: boolean);

        get configLoadFailed(): boolean;
        set configLoadFailed(val: boolean);

        get overview(): Overview;
        set overview(val: Overview);

        get focused_workspace(): (Workspace | null);
        set focused_workspace(val: (Workspace | null));

        get focusedWorkspace(): Workspace;
        set focusedWorkspace(val: Workspace);

        get focused_window(): (Window | null);
        set focused_window(val: (Window | null));

        get focusedWindow(): Window;
        set focusedWindow(val: Window);

        /**
         * @read-only
         */
        get focused_output(): (Output | null);

        /**
         * @read-only
         */
        get focusedOutput(): Output;

        /**
         * @read-only
         */
        get windows(): Window[];

        /**
         * @read-only
         */
        get outputs(): Output[];

        /**
         * @read-only
         */
        get workspaces(): Workspace[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Niri.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Niri.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Niri;

        // Signals
        /** @signal */
        connect<K extends keyof Niri.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Niri.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Niri.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Niri.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Niri.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Niri.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static get_default(): (Niri | null);

        // Methods
        /**
         * @param id 
         */
        get_window(id: (bigint | number)): (Window | null);

        /**
         * @param id 
         */
        get_workspace(id: (bigint | number)): (Workspace | null);

        get_keyboard_layout_idx(): number;

        get_config_load_failed(): boolean;

        get_overview(): Overview;

        get_focused_workspace(): (Workspace | null);

        get_focused_window(): (Window | null);

        get_focused_output(): (Output | null);

        get_windows(): Window[];

        get_outputs(): Output[];

        get_workspaces(): Workspace[];
    }


    namespace Window {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            changed: () => void;
            /**
             * @signal
             */
            closed: () => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::app-id": (pspec: GObject.ParamSpec) => void;
            "notify::workspace-id": (pspec: GObject.ParamSpec) => void;
            "notify::is-urgent": (pspec: GObject.ParamSpec) => void;
            "notify::is-focused": (pspec: GObject.ParamSpec) => void;
            "notify::is-floating": (pspec: GObject.ParamSpec) => void;
            "notify::layout": (pspec: GObject.ParamSpec) => void;
            "notify::workspace": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: (bigint | number);
            title: (string | null);
            app_id: (string | null);
            appId: string;
            workspace_id: (bigint | number);
            workspaceId: (bigint | number);
            is_urgent: boolean;
            isUrgent: boolean;
            is_focused: boolean;
            isFocused: boolean;
            is_floating: (boolean | any);
            isFloating: boolean;
            layout: WindowLayout;
            workspace: (Workspace | null);
        }
    }

    /**
     * @gir-type Class
     */
    class Window extends GObject.Object {
        static $gtype: GObject.GType<Window>;

        // Properties
        get id(): number;
        set id(val: (bigint | number));

        get title(): (string | null);
        set title(val: (string | null));

        get app_id(): (string | null);
        set app_id(val: (string | null));

        get appId(): string;
        set appId(val: string);

        get workspace_id(): number;
        set workspace_id(val: (bigint | number));

        get workspaceId(): number;
        set workspaceId(val: (bigint | number));

        get is_urgent(): boolean;
        set is_urgent(val: boolean);

        get isUrgent(): boolean;
        set isUrgent(val: boolean);

        get is_focused(): boolean;
        set is_focused(val: boolean);

        get isFocused(): boolean;
        set isFocused(val: boolean);

    // This accessor conflicts with a field or function name in a parent class or interface.
         is_floating: boolean | any;

        get isFloating(): boolean;
        set isFloating(val: boolean);

        get layout(): WindowLayout;
        set layout(val: WindowLayout);

        /**
         * @read-only
         */
        get workspace(): (Workspace | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Window.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Window.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Window;

        // Signals
        /** @signal */
        connect<K extends keyof Window.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Window.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Window.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Window.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param id 
         */
        focus(id: number): boolean;

        /**
         * @param new_urgency 
         */
        set_urgency(new_urgency: boolean): boolean;

        /**
         * @param workspace_id 
         * @param focus 
         */
        move_to_workspace(workspace_id: number, focus: (boolean | null)): boolean;

        /**
         * @param output 
         */
        move_to_monitor(output: string): boolean;

        get_id(): number;

        get_title(): (string | null);

        get_app_id(): (string | null);

        get_workspace_id(): number;

        get_is_urgent(): boolean;

        get_is_focused(): boolean;

        get_is_floating(): boolean;

        get_layout(): WindowLayout;

        get_workspace(): (Workspace | null);
    }


    namespace Workspace {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            activated: () => void;
            /**
             * @signal
             */
            "active-window-changed": (arg0: ((bigint | number) | null)) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::idx": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::output": (pspec: GObject.ParamSpec) => void;
            "notify::is-urgent": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-focused": (pspec: GObject.ParamSpec) => void;
            "notify::active-window-id": (pspec: GObject.ParamSpec) => void;
            "notify::active-window": (pspec: GObject.ParamSpec) => void;
            "notify::windows": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: (bigint | number);
            idx: number;
            name: (string | null);
            output: (string | null);
            is_urgent: boolean;
            isUrgent: boolean;
            is_active: boolean;
            isActive: boolean;
            is_focused: boolean;
            isFocused: boolean;
            active_window_id: (bigint | number);
            activeWindowId: (bigint | number);
            active_window: (Window | null);
            activeWindow: Window;
            windows: Window[];
        }
    }

    /**
     * @gir-type Class
     */
    class Workspace extends GObject.Object {
        static $gtype: GObject.GType<Workspace>;

        // Properties
        get id(): number;
        set id(val: (bigint | number));

        get idx(): number;
        set idx(val: number);

        get name(): (string | null);
        set name(val: (string | null));

        get output(): (string | null);
        set output(val: (string | null));

        get is_urgent(): boolean;
        set is_urgent(val: boolean);

        get isUrgent(): boolean;
        set isUrgent(val: boolean);

        get is_active(): boolean;
        set is_active(val: boolean);

        get isActive(): boolean;
        set isActive(val: boolean);

        get is_focused(): boolean;
        set is_focused(val: boolean);

        get isFocused(): boolean;
        set isFocused(val: boolean);

        get active_window_id(): number;
        set active_window_id(val: (bigint | number));

        get activeWindowId(): number;
        set activeWindowId(val: (bigint | number));

        /**
         * @read-only
         */
        get active_window(): (Window | null);

        /**
         * @read-only
         */
        get activeWindow(): Window;

        /**
         * @read-only
         */
        get windows(): Window[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Workspace.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Workspace.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Workspace;

        // Signals
        /** @signal */
        connect<K extends keyof Workspace.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Workspace.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Workspace.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Workspace.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Workspace.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Workspace.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        focus(): boolean;

        /**
         * @param name 
         */
        rename(name: string): boolean;

        /**
         * @param output 
         */
        move_to_monitor(output: string): boolean;

        get_id(): number;

        get_idx(): number;

        get_name(): (string | null);

        get_output(): (string | null);

        get_is_urgent(): boolean;

        get_is_active(): boolean;

        get_is_focused(): boolean;

        get_active_window_id(): number;

        get_active_window(): (Window | null);

        get_windows(): Window[];
    }


    namespace Output {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            focused: (arg0: number) => void;
            /**
             * @signal
             */
            "active-workspace-changed": (arg0: ((bigint | number) | null)) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::make": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::serial": (pspec: GObject.ParamSpec) => void;
            "notify::physical-size": (pspec: GObject.ParamSpec) => void;
            "notify::modes": (pspec: GObject.ParamSpec) => void;
            "notify::current-mode": (pspec: GObject.ParamSpec) => void;
            "notify::vrr-supported": (pspec: GObject.ParamSpec) => void;
            "notify::vrr-enabled": (pspec: GObject.ParamSpec) => void;
            "notify::logical": (pspec: GObject.ParamSpec) => void;
            "notify::workspaces": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
            make: string;
            model: string;
            serial: (string | null);
            physical_size: (PhysicalSize | null);
            physicalSize: PhysicalSize;
            modes: Mode[];
            current_mode: (bigint | number);
            currentMode: (bigint | number);
            vrr_supported: boolean;
            vrrSupported: boolean;
            vrr_enabled: boolean;
            vrrEnabled: boolean;
            logical: (LogicalOutput | null);
            workspaces: Workspace[];
        }
    }

    /**
     * @gir-type Class
     */
    class Output extends GObject.Object {
        static $gtype: GObject.GType<Output>;

        // Properties
        get name(): string;
        set name(val: string);

        get make(): string;
        set make(val: string);

        get model(): string;
        set model(val: string);

        get serial(): (string | null);
        set serial(val: (string | null));

        get physical_size(): (PhysicalSize | null);
        set physical_size(val: (PhysicalSize | null));

        get physicalSize(): PhysicalSize;
        set physicalSize(val: PhysicalSize);

        get modes(): Mode[];
        set modes(val: Mode[]);

        get current_mode(): number;
        set current_mode(val: (bigint | number));

        get currentMode(): number;
        set currentMode(val: (bigint | number));

        get vrr_supported(): boolean;
        set vrr_supported(val: boolean);

        get vrrSupported(): boolean;
        set vrrSupported(val: boolean);

        get vrr_enabled(): boolean;
        set vrr_enabled(val: boolean);

        get vrrEnabled(): boolean;
        set vrrEnabled(val: boolean);

        get logical(): (LogicalOutput | null);
        set logical(val: (LogicalOutput | null));

        /**
         * @read-only
         */
        get workspaces(): Workspace[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Output.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Output.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Output;

        // Signals
        /** @signal */
        connect<K extends keyof Output.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Output.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Output.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Output.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Output.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Output.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        focus(): boolean;

        get_name(): string;

        get_make(): string;

        get_model(): string;

        get_serial(): (string | null);

        get_physical_size(): (PhysicalSize | null);

        get_modes(): Mode[];

        get_current_mode(): number;

        get_vrr_supported(): boolean;

        get_vrr_enabled(): boolean;

        get_logical(): (LogicalOutput | null);

        get_workspaces(): Workspace[];
    }


    namespace Overview {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::is-open": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            is_open: boolean;
            isOpen: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Overview extends GObject.Object {
        static $gtype: GObject.GType<Overview>;

        // Properties
        get is_open(): boolean;
        set is_open(val: boolean);

        get isOpen(): boolean;
        set isOpen(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Overview.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Overview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Overview;

        // Signals
        /** @signal */
        connect<K extends keyof Overview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Overview.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Overview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Overview.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Overview.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Overview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        toggle(): globalThis.Promise<boolean>;

        /**
         * @param _callback_ 
         */
        toggle(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        toggle(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param _res_ 
         */
        toggle_finish(_res_: Gio.AsyncResult): boolean;

        get_is_open(): boolean;
    }


    namespace msg {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class msg extends GObject.Object {
        static $gtype: GObject.GType<msg>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: msg.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<msg.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): msg;

        // Signals
        /** @signal */
        connect<K extends keyof msg.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, msg.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof msg.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, msg.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof msg.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<msg.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param message 
         */
        static send(message: string): (string | null);

        /**
         * @param message 
         * @param _callback_ 
         */
        static send_async(message: string, _callback_: (Gio.AsyncReadyCallback<msg> | null)): void;

        /**
         * @param _res_ 
         */
        static send_finish(_res_: Gio.AsyncResult): string;

        static center_column(): boolean;

        static center_visible_columns(): boolean;

        /**
         * @param id 
         */
        static center_window(id: (number | null)): boolean;

        static clear_dynamic_cast_target(): boolean;

        static close_overview(): boolean;

        /**
         * @param id 
         */
        static close_window(id: (number | null)): boolean;

        /**
         * @param id 
         */
        static consume_or_expel_window_left(id: (number | null)): boolean;

        /**
         * @param id 
         */
        static consume_or_expel_window_right(id: (number | null)): boolean;

        static consume_window_into_column(): boolean;

        static debug_toggle_damage(): boolean;

        static debug_toggle_opaque_regions(): boolean;

        /**
         * @param delay_ms 
         */
        static do_screen_transition(delay_ms: (number | null)): boolean;

        static expand_column_to_available_width(): boolean;

        static expel_window_from_column(): boolean;

        /**
         * @param index 
         */
        static focus_column(index: number): boolean;

        static focus_column_first(): boolean;

        static focus_column_last(): boolean;

        static focus_column_left(): boolean;

        static focus_column_left_or_last(): boolean;

        static focus_column_or_monitor_left(): boolean;

        static focus_column_or_monitor_right(): boolean;

        static focus_column_right(): boolean;

        static focus_column_right_or_first(): boolean;

        static focus_floating(): boolean;

        /**
         * @param output 
         */
        static focus_monitor(output: string): boolean;

        static focus_monitor_down(): boolean;

        static focus_monitor_left(): boolean;

        static focus_monitor_next(): boolean;

        static focus_monitor_previous(): boolean;

        static focus_monitor_right(): boolean;

        static focus_monitor_up(): boolean;

        static focus_tiling(): boolean;

        /**
         * @param id 
         */
        static focus_window(id: number): boolean;

        static focus_window_bottom(): boolean;

        static focus_window_down(): boolean;

        static focus_window_down_or_column_left(): boolean;

        static focus_window_down_or_column_right(): boolean;

        static focus_window_down_or_top(): boolean;

        static focus_window_or_workspace_down(): boolean;

        static focus_window_or_workspace_up(): boolean;

        /**
         * @param index 
         */
        static focus_window_in_column(index: number): boolean;

        static focus_window_or_monitor_down(): boolean;

        static focus_window_or_monitor_up(): boolean;

        static focus_window_previous(): boolean;

        static focus_window_top(): boolean;

        static focus_window_up(): boolean;

        static focus_window_up_or_bottom(): boolean;

        static focus_window_up_or_column_left(): boolean;

        static focus_window_up_or_column_right(): boolean;

        /**
         * @param workspace_id 
         */
        static focus_workspace_by_id(workspace_id: number): boolean;

        /**
         * @param workspace_index 
         */
        static focus_workspace_by_index(workspace_index: number): boolean;

        /**
         * @param workspace_name 
         */
        static focus_workspace_by_name(workspace_name: string): boolean;

        static focus_workspace_down(): boolean;

        static focus_workspace_previous(): boolean;

        static focus_workspace_next(): boolean;

        static focus_workspace_up(): boolean;

        /**
         * @param id 
         */
        static fullscreen_window(id: (number | null)): boolean;

        static maximize_column(): boolean;

        static move_column_left(): boolean;

        static move_column_left_or_to_monitor_left(): boolean;

        static move_column_right(): boolean;

        static move_column_right_or_to_monitor_right(): boolean;

        static move_column_to_first(): boolean;

        /**
         * @param index 
         */
        static move_column_to_index(index: number): boolean;

        static move_column_to_last(): boolean;

        /**
         * @param output 
         */
        static move_column_to_monitor(output: string): boolean;

        static move_column_to_monitor_down(): boolean;

        static move_column_to_monitor_left(): boolean;

        static move_column_to_monitor_next(): boolean;

        static move_column_to_monitor_previous(): boolean;

        static move_column_to_monitor_right(): boolean;

        static move_column_to_monitor_up(): boolean;

        /**
         * @param workspace_id 
         * @param focus 
         */
        static move_column_to_workspace_by_id(workspace_id: number, focus: boolean): boolean;

        /**
         * @param workspace_index 
         * @param focus 
         */
        static move_column_to_workspace_by_index(workspace_index: number, focus: boolean): boolean;

        /**
         * @param workspace_name 
         * @param focus 
         */
        static move_column_to_workspace_by_name(workspace_name: string, focus: boolean): boolean;

        /**
         * @param focus 
         */
        static move_column_to_workspace_down(focus: boolean): boolean;

        /**
         * @param focus 
         */
        static move_column_to_workspace_up(focus: boolean): boolean;

        /**
         * @param id 
         * @param adjust_x 
         * @param adjust_y 
         */
        static move_floating_window_adjust_x_adjust_y(id: (number | null), adjust_x: number, adjust_y: number): boolean;

        /**
         * @param id 
         * @param adjust_x 
         * @param set_y 
         */
        static move_floating_window_adjust_x_set_y(id: (number | null), adjust_x: number, set_y: number): boolean;

        /**
         * @param id 
         * @param set_x 
         * @param adjust_y 
         */
        static move_floating_window_set_x_adjust_y(id: (number | null), set_x: number, adjust_y: number): boolean;

        /**
         * @param id 
         * @param set_x 
         * @param set_y 
         */
        static move_floating_window_set_x_set_y(id: (number | null), set_x: number, set_y: number): boolean;

        static move_window_down(): boolean;

        static move_window_down_or_to_workspace_down(): boolean;

        /**
         * @param id 
         */
        static move_window_to_floating(id: (number | null)): boolean;

        /**
         * @param id 
         * @param output 
         */
        static move_window_to_monitor(id: (number | null), output: string): boolean;

        static move_window_to_monitor_down(): boolean;

        static move_window_to_monitor_left(): boolean;

        static move_window_to_monitor_right(): boolean;

        static move_window_to_monitor_up(): boolean;

        static move_window_to_monitor_previous(): boolean;

        static move_window_to_monitor_next(): boolean;

        /**
         * @param id 
         */
        static move_window_to_tiling(id: (number | null)): boolean;

        /**
         * @param window_id 
         * @param workspace_id 
         * @param focus 
         */
        static move_window_to_workspace_by_id(window_id: (number | null), workspace_id: number, focus: boolean): boolean;

        /**
         * @param window_id 
         * @param workspace_index 
         * @param focus 
         */
        static move_window_to_workspace_by_index(window_id: (number | null), workspace_index: number, focus: boolean): boolean;

        /**
         * @param window_id 
         * @param workspace_name 
         * @param focus 
         */
        static move_window_to_workspace_by_name(window_id: (number | null), workspace_name: string, focus: boolean): boolean;

        static move_window_to_workspace_down(): boolean;

        static move_window_to_workspace_up(): boolean;

        static move_window_up(): boolean;

        static move_window_up_or_to_workspace_up(): boolean;

        static move_workspace_down(): boolean;

        /**
         * @param workspace_id 
         * @param index 
         */
        static move_workspace_to_index_by_id(workspace_id: number, index: number): boolean;

        /**
         * @param workspace_index 
         * @param index 
         */
        static move_workspace_to_index_by_index(workspace_index: number, index: number): boolean;

        /**
         * @param workspace_name 
         * @param index 
         */
        static move_workspace_to_index_by_name(workspace_name: string, index: number): boolean;

        /**
         * @param output 
         * @param workspace_id 
         */
        static move_workspace_to_monitor_by_id(output: string, workspace_id: number): boolean;

        /**
         * @param output 
         * @param workspace_index 
         */
        static move_workspace_to_monitor_by_index(output: string, workspace_index: number): boolean;

        /**
         * @param output 
         * @param workspace_name 
         */
        static move_workspace_to_monitor_by_name(output: string, workspace_name: string): boolean;

        static move_workspace_to_monitor_down(): boolean;

        static move_workspace_to_monitor_left(): boolean;

        static move_workspace_to_monitor_next(): boolean;

        static move_workspace_to_monitor_previous(): boolean;

        static move_workspace_to_monitor_right(): boolean;

        static move_workspace_to_monitor_up(): boolean;

        static move_workspace_up(): boolean;

        static open_overview(): boolean;

        /**
         * @param _callback_ 
         */
        static pick_color(_callback_: (Gio.AsyncReadyCallback<msg> | null)): void;

        /**
         * @param _res_ 
         */
        static pick_color_finish(_res_: Gio.AsyncResult): (number[] | null);

        /**
         * @param _callback_ 
         */
        static pick_window(_callback_: (Gio.AsyncReadyCallback<msg> | null)): void;

        /**
         * @param _res_ 
         */
        static pick_window_finish(_res_: Gio.AsyncResult): (Window | null);

        static power_off_monitors(): boolean;

        static power_on_monitors(): boolean;

        /**
         * @param skip_confirmation 
         */
        static quit(skip_confirmation: boolean): boolean;

        /**
         * @param id 
         */
        static reset_window_height(id: (number | null)): boolean;

        /**
         * @param show_pointer 
         */
        static screenshot(show_pointer: boolean): boolean;

        /**
         * @param write_to_disk 
         * @param show_pointer 
         */
        static screenshot_screen(write_to_disk: boolean, show_pointer: boolean): boolean;

        /**
         * @param id 
         * @param write_to_disk 
         */
        static screenshot_window(id: (number | null), write_to_disk: boolean): boolean;

        /**
         * @param display 
         */
        static set_column_display(display: ColumnDisplayTag): boolean;

        /**
         * @param id 
         * @param fixed_value 
         */
        static set_column_width_adjust_fixed(id: (number | null), fixed_value: number): boolean;

        /**
         * @param id 
         * @param proportion 
         */
        static set_column_width_adjust_proportion(id: (number | null), proportion: number): boolean;

        /**
         * @param id 
         * @param fixed_value 
         */
        static set_column_width_set_fixed(id: (number | null), fixed_value: number): boolean;

        /**
         * @param id 
         * @param proportion 
         */
        static set_column_width_set_proportion(id: (number | null), proportion: number): boolean;

        /**
         * @param id 
         */
        static set_dynamic_cast_window(id: (number | null)): boolean;

        /**
         * @param output 
         */
        static set_dynamic_cast_monitor(output: (string | null)): boolean;

        /**
         * @param id 
         * @param fixed_value 
         */
        static set_window_height_adjust_fixed(id: (number | null), fixed_value: number): boolean;

        /**
         * @param id 
         * @param proportion 
         */
        static set_window_height_adjust_proportion(id: (number | null), proportion: number): boolean;

        /**
         * @param id 
         * @param fixed_value 
         */
        static set_window_height_set_fixed(id: (number | null), fixed_value: number): boolean;

        /**
         * @param id 
         * @param proportion 
         */
        static set_window_height_set_proportion(id: (number | null), proportion: number): boolean;

        /**
         * @param id 
         */
        static set_window_urgent(id: number): boolean;

        /**
         * @param id 
         * @param fixed_value 
         */
        static set_window_width_adjust_fixed(id: (number | null), fixed_value: number): boolean;

        /**
         * @param id 
         * @param proportion 
         */
        static set_window_width_adjust_proportion(id: (number | null), proportion: number): boolean;

        /**
         * @param id 
         * @param fixed_value 
         */
        static set_window_width_set_fixed(id: (number | null), fixed_value: number): boolean;

        /**
         * @param id 
         * @param proportion 
         */
        static set_window_width_set_proportion(id: (number | null), proportion: number): boolean;

        /**
         * @param workspace_id 
         * @param new_name 
         */
        static set_workspace_name_by_id(workspace_id: number, new_name: string): boolean;

        /**
         * @param workspace_index 
         * @param new_name 
         */
        static set_workspace_name_by_index(workspace_index: number, new_name: string): boolean;

        /**
         * @param workspace_name 
         * @param new_name 
         */
        static set_workspace_name_by_name(workspace_name: string, new_name: string): boolean;

        static show_hotkey_overlay(): boolean;

        /**
         * @param command 
         */
        static spawn(command: string[]): boolean;

        static swap_window_left(): boolean;

        static swap_window_right(): boolean;

        static switch_focus_between_floating_and_tiling(): boolean;

        /**
         * @param index 
         */
        static switch_layout_index(index: number): boolean;

        static switch_layout_next(): boolean;

        static switch_layout_prev(): boolean;

        static switch_preset_column_width(): boolean;

        /**
         * @param id 
         */
        static switch_preset_window_height(id: (number | null)): boolean;

        /**
         * @param id 
         */
        static switch_preset_window_width(id: (number | null)): boolean;

        static toggle_column_tabbed_display(): boolean;

        static toggle_debug_tint(): boolean;

        static toggle_keyboard_shortcuts_inhibit(): boolean;

        static toggle_overview(): boolean;

        /**
         * @param id 
         */
        static toggle_window_floating(id: (number | null)): boolean;

        /**
         * @param id 
         */
        static toggle_window_rule_opacity(id: (number | null)): boolean;

        /**
         * @param id 
         */
        static toggle_window_urgent(id: number): boolean;

        /**
         * @param id 
         */
        static toggle_windowed_fullscreen(id: (number | null)): boolean;

        /**
         * @param id 
         */
        static unset_window_urgent(id: number): boolean;

        /**
         * @param workspace_id 
         */
        static unset_workspace_name_by_id(workspace_id: number): boolean;

        /**
         * @param workspace_index 
         */
        static unset_workspace_name_by_index(workspace_index: number): boolean;

        /**
         * @param workspace_name 
         */
        static unset_workspace_name_by_name(workspace_name: string): boolean;

        // Methods
        layers(): string;
    }


    /**
     * @gir-type Alias
     */
    type NiriClass = typeof Niri;

    /**
     * @gir-type Struct
     */
    abstract class NiriPrivate {
        static $gtype: GObject.GType<NiriPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type WindowClass = typeof Window;

    /**
     * @gir-type Struct
     */
    abstract class WindowPrivate {
        static $gtype: GObject.GType<WindowPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type WorkspaceClass = typeof Workspace;

    /**
     * @gir-type Struct
     */
    abstract class WorkspacePrivate {
        static $gtype: GObject.GType<WorkspacePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type OutputClass = typeof Output;

    /**
     * @gir-type Struct
     */
    abstract class OutputPrivate {
        static $gtype: GObject.GType<OutputPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type OverviewClass = typeof Overview;

    /**
     * @gir-type Struct
     */
    abstract class OverviewPrivate {
        static $gtype: GObject.GType<OverviewPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type msgClass = typeof msg;

    /**
     * @gir-type Struct
     */
    abstract class msgPrivate {
        static $gtype: GObject.GType<msgPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class PhysicalSize {
        static $gtype: GObject.GType<PhysicalSize>;

        // Fields
        x: number;

        y: number;

        // Constructors

        constructor(properties?: Partial<{
            x: number;
            y: number;
        }>);

        // Methods
        /**
         * @param size 
         */
        init_from_json(size: Json.Array): void;
    }


    /**
     * @gir-type Struct
     */
    class LogicalOutput {
        static $gtype: GObject.GType<LogicalOutput>;

        // Constructors

        constructor(properties?: Partial<{
            _x: number;
            _y: number;
            _width: number;
            _height: number;
            _scale: number;
            _transform: string;
        }>);

        // Methods
        get_x(): number;

        get_y(): number;

        get_width(): number;

        get_height(): number;

        get_scale(): number;

        get_transform(): string;
    }


    /**
     * @gir-type Struct
     */
    class Mode {
        static $gtype: GObject.GType<Mode>;

        // Methods
        get_width(): number;

        get_height(): number;

        get_refresh_rate(): number;

        get_is_preferred(): boolean;
    }


    /**
     * @gir-type Struct
     */
    class WindowLayout {
        static $gtype: GObject.GType<WindowLayout>;

        // Fields
        pos_in_scrolling_layout: number[];

        tile_size: number[];

        window_size: number[];

        tile_pos_in_workspace_view: number[];

        window_offset_in_tile: number[];

        // Constructors

        constructor(properties?: Partial<{
            pos_in_scrolling_layout: number[];
            tile_size: number[];
            window_size: number[];
            tile_pos_in_workspace_view: number[];
            window_offset_in_tile: number[];
        }>);
    }


    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;

    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default AstalNiri;

}

declare module 'gi://AstalNiri' {
    import AstalNiri01 from 'gi://AstalNiri?version=0.1';
    export default AstalNiri01;
}
// END
