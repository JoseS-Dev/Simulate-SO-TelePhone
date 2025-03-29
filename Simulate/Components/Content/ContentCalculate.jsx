import {View, Text } from "react-native";
import { stylesCalculate } from "../Css/Calculate";

export function ContentCalculate(){
    return(
        <View style={stylesCalculate.ContainerCalculate}>
            <Text style={stylesCalculate.TextCalculate}>Calculadora</Text>
        </View>
    )
}