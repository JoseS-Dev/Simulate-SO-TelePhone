import {View, Text, Image, Pressable} from "react-native";
import { StylesStructureMessage } from "../../Css/StructureMessage";
import { Link } from 'expo-router'

export function StructureMessage({message, deleteUserMessage}){
    return(
        <View style={StylesStructureMessage.containerMessage} key={message.id}>
            <Link href={{pathname: '/FormMessage', params: {id: message.id, name: message.name, messages: message.messageUser, phone: message.phone}}} 
            style={{flex: 1}} >
                <View style={StylesStructureMessage.container}>
                    <Text style={StylesStructureMessage.textContainer}>{message.name}</Text>
                    <Text style={StylesStructureMessage.textmessage} numberOfLines={1}>{message.messageUser}</Text>
                </View>
            </Link>
            <Pressable style={StylesStructureMessage.Pressable} onPress={() => deleteUserMessage(message.id)}>
                <Image style={StylesStructureMessage.ImageDelete} source={require('../../assets/Delete.png')}/>
            </Pressable>
        </View>
    )
}