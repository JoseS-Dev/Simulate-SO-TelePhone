import { ContentContacts } from "./Content/ContentContacts";
import { BarraIcon } from "./BarraIcon";
import { BarraNav } from "./BarraNav";
import { SafeAreaProvider } from "react-native-safe-area-context";
export function ContactsCall(){
    return (
        <SafeAreaProvider>
            <BarraIcon/>
            <ContentContacts/>
            <BarraNav/>
        </SafeAreaProvider>
    );
}