import { View, Text, FlatList } from "react-native";
import { StylesMessage } from "../../Css/Message";

export function ContentMessage(){
    return(
        <View style={StylesMessage.containerMessage}>
            <View style={StylesMessage.ContainerMain}>
                <View style={StylesMessage.ContainerTitle}>
                    <Text style={StylesMessage.textTitle}>Mensajes</Text>
                </View>
                <View style={StylesMessage.ContainerMess}>
                    <FlatList
                        
                    />
                </View>
            </View>
        </View>
    )
}