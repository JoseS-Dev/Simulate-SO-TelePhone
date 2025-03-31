import {View, Text, Image, Pressable} from "react-native";
import { StylesStructureMessage } from "../../Css/StructureMessage";

export function StructureMessage({message, deleteUserMessage}){
    return(
        <View style={StylesStructureMessage.containerMessage} key={message.id}>
            <View style={StylesStructureMessage.container}>
                <Text style={StylesStructureMessage.textContainer}>{message.name}</Text>
                <Text style={StylesStructureMessage.textmessage} numberOfLines={1}>{message.messageUser}</Text>
            </View>
            <Pressable style={StylesStructureMessage.Pressable} onPress={() => deleteUserMessage(message.id)}>
                <Image style={StylesStructureMessage.ImageDelete} source={require('../../assets/Delete.png')}/>
            </Pressable>
        </View>
    )
}