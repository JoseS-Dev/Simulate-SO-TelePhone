import { ContentGmail } from "./Content/ContentGmail";
import {BarraIcon} from "./BarraIcon";
import { BarraNav } from "./BarraNav";
import { SafeAreaProvider } from "react-native-safe-area-context";
export function Gmail() {
    return (
        <SafeAreaProvider>
            <BarraIcon />
            <ContentGmail />
            <BarraNav />
        </SafeAreaProvider>
    )
}
