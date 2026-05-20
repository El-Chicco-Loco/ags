import { icons } from "@/src/lib/icons";
import BarItem from "@/src/widgets/baritem";
import { windows_names } from "@/windows";
import { isVertical } from "../bar";
import { config, theme } from "@/options";

export function QuickSettings() {
   const conf = config.bar.modules.quicksettings;

   return (
      <BarItem
         window={windows_names.quicksettings}
         onHover={conf["on-hover"]}
         onHoverOpen={"open-qs"}
         onHoverClose={"close-qs"}
         onPrimaryClick={conf["on-click"]}
         onSecondaryClick={conf["on-click-right"]}
         onMiddleClick={conf["on-click-middle"]}
         data={{
            icon: (
               <image
                  hexpand={isVertical}
                  pixelSize={theme["icon-size"].normal}
                  iconName={icons.settings}
               />
            ),
         }}
         format={conf.format}
      />
   );
}
