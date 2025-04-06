import { ContentCall } from "./Content/ContentCall";
import { BarraIcon } from "./BarraIcon";
import { BarraNav } from "./BarraNav";
import { SafeAreaProvider } from "react-native-safe-area-context";
export function Call() {
    return (
        <SafeAreaProvider>
            <BarraIcon/>
            <ContentCall/>
            <BarraNav/>
        </SafeAreaProvider>
    )
}