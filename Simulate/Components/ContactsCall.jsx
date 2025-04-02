import { ContentContacts } from "./Content/ContentContacts";
import { BarraIcon } from "./BarraIcon";
import { SafeAreaProvider } from "react-native-safe-area-context";
export function ContactsCall(){
    return (
        <SafeAreaProvider>
            <BarraIcon/>
            <ContentContacts/>
        </SafeAreaProvider>
    );
}