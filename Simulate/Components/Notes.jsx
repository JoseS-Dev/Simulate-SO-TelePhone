import { ContentNotes } from "./Content/ContentNotes";
import { BarraIcon} from "./BarraIcon";
import { BarraNav } from "./BarraNav";
import { SafeAreaProvider } from "react-native-safe-area-context";
export function Notes(){
    return(
        <SafeAreaProvider>
            <BarraIcon/>
            <ContentNotes/>
            <BarraNav/>
        </SafeAreaProvider>
    )
}