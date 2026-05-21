import { windows_names } from "@/windows";
import { QuickSettingsModule } from "../modules/quicksettings/quicksettings";
import { BarItemPopup } from "../widgets/baritempopup";
import { attachHover, handleHover } from "../widgets/baritem";

export function QuickSettingsWindow() {
   return (
      <BarItemPopup
         name={windows_names.quicksettings}
         module={"quicksettings"}
         width={440}
         $={(self) => {
            attachHover(self, () => {
               handleHover("open-qs-popup");
            }, () => {
               handleHover("close-qs-popup");
            });
         }}
      >
         <QuickSettingsModule />
      </BarItemPopup>
   );
}
