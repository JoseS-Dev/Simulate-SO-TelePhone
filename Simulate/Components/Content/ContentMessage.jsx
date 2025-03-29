import { View, Text } from "react-native";
import { StylesMessage } from "../Css/Message";

export function ContentMessage(){
    return(
        <View style={StylesMessage.ContainerMessage}>
            <Text style={StylesMessage.TextMessage}>Mensajes</Text>
        </View>
    )
}