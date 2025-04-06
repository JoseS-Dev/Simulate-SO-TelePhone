import { StructureInfoGmail } from "./Content/StructureInfoGmail";
import { BarraIcon } from "./BarraIcon";
import { BarraNav } from "./BarraNav";
import { SafeAreaProvider } from "react-native-safe-area-context";
export function InfoGmail(){
    return(
        <SafeAreaProvider>
            <BarraIcon/>
            <StructureInfoGmail/>
            <BarraNav/>
        </SafeAreaProvider>
    )
}