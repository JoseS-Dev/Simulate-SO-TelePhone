import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import { StylesMessage } from "../../Css/Message";
import { StructureMessage } from "./StrucutreMessage";
import { getUserMessage } from "../../Js/UserMessage";
import { useState, useEffect } from "react";

export function ContentMessage(){
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        getUserMessage().then((data) => {
            setMessages(data);
        }).catch((error) => {
            console.error("Error fetching messages:", error);
        });
    }, []);
    const deleteUserMessage = (id) => {
        const updatedMessages = messages.filter((message) => message.id !== id);
        setMessages(updatedMessages);
    }
    return(
        <View style={StylesMessage.containerMessage}>
            <View style={StylesMessage.ContainerMain}>
                <View style={StylesMessage.ContainerTitle}>
                    <Text style={StylesMessage.textTitle}>Mensajes</Text>
                    <Image source={require('../../assets/Message/Message.png')} style={StylesMessage.ImageMessage}/>
                </View>
                {messages.length > 0 ? (
                    <FlatList
                        data={messages}
                        renderItem={({ item }) => (
                            <StructureMessage message={item} deleteUserMessage={deleteUserMessage}/>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                ) : (
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator size="large" color="#fff" />
                        
                    </View>
                )}
            </View>
        </View>
    )
}