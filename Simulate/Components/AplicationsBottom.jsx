import { View, Image, Text } from "react-native";
import { StylesAplicationsBottom } from "../Css/AplicationsBottom";
import { ContentAplicationII } from "./Content/ContentAplicactioII";

export function AplicationsBottom(){
    return(
        <View style={StylesAplicationsBottom.ContainerMain}>
            <ContentAplicationII/>
        </View>
    )
}