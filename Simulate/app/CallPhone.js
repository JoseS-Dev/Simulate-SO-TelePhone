import { CallPhone } from "../Components/CallPhone";
import { BarraIcon } from "../Components/BarraIcon";
import { BarraNav } from "../Components/BarraNav";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function CallPhoneScreen() {
    return(
        <SafeAreaProvider>
            <BarraIcon/>
            <CallPhone/>
            <BarraNav/>
        </SafeAreaProvider>
    )
}