import { ContentCalculate } from "./Content/ContentCalculate"
import { BarraIcon } from "./BarraIcon"
import { View } from "react-native";
import { StylesGeneral } from "../Css/General";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BatteryProvider } from "../Js/Battery";
export function Calculate(){
    return(
        <SafeAreaProvider>
            <BarraIcon/>
            <ContentCalculate/>
        </SafeAreaProvider>
    )
}