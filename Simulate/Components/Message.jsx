import { ContentMessage } from "./Content/ContentMessage"
import { BarraIcon } from "./BarraIcon";
import { BarraNav } from "./BarraNav";
import { SafeAreaProvider } from "react-native-safe-area-context"
export  function Message() {
    return (
        <SafeAreaProvider>
            <BarraIcon/>
            <ContentMessage/>
            <BarraNav/>
        </SafeAreaProvider>
    )
}