import { View, Text } from "react-native";
import { StylesGmail } from "../../Css/Gmail";

export function ContentGmail(){
    return(
        <View style={StylesGmail.ContainerGmail}>
            <Text style={StylesGmail.TextGmail}>Gmail</Text>
        </View>
    )
}