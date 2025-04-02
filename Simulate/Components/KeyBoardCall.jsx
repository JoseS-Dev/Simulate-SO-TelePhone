import { ContentKeyBoard } from "./Content/ContentKeyboard";
import { BarraIcon } from "./BarraIcon";
import { SafeAreaProvider } from "react-native-safe-area-context";
export function KeyBoardCall() {
    return (
        <SafeAreaProvider>
            <BarraIcon/>
            <ContentKeyBoard/>
        </SafeAreaProvider>
    );
}