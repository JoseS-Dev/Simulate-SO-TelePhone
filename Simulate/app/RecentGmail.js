import { RecentGmail } from "../Components/RecentGmail";
import { BarraIcon } from "../Components/BarraIcon";
import { BarraNav } from "../Components/BarraNav";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function RecentGmailScreen(){
    return(
        <SafeAreaProvider>
            <BarraIcon/>
            <RecentGmail/>
            <BarraNav/>
        </SafeAreaProvider>
    )
}