import { FormNotes } from "../Components/FormNotes";
import { BarraIcon } from "../Components/BarraIcon";
import { BarraNav } from "../Components/BarraNav";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function MessageNotes(){
    return(
        <SafeAreaProvider>
            <BarraIcon/>
            <FormNotes/>
            <BarraNav/>
        </SafeAreaProvider>
    )
}