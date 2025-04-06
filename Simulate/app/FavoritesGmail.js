import { FavoriteGmail } from "../Components/FavoritesGmail";
import { BarraIcon } from "../Components/BarraIcon";
import { BarraNav } from "../Components/BarraNav";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function FavoritesGmailScreen(){
    return(
        <SafeAreaProvider>
            <BarraIcon/>
            <FavoriteGmail/>
            <BarraNav/>
        </SafeAreaProvider>
    )
}