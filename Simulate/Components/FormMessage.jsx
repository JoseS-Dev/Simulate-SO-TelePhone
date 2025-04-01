import { View, Text, Pressable, Image, TextInput, ScrollView } from 'react-native';
import { stylesFormMessage } from '../Css/FormMessage';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGlobalSearchParams } from 'expo-router';

export function FormMessage(){
    const { id, name, phone, messages } = useGlobalSearchParams();
    const [InputMessage, setMessageInput] = useState('');
    const [sentMessages, setSentMessages] = useState([]);
    const dependenciasID = `enviarmensaje-${id}`;
    useEffect(() => {
        const loadMessages = async () => {
            try {
                const storedMessages = await AsyncStorage.getItem(dependenciasID);
                if (storedMessages) {
                    setSentMessages(JSON.parse(storedMessages) || []);

                }
            } catch (error) {
                console.error('Error loading messages:', error);
            }
        }
        loadMessages();
    },[dependenciasID]);

    const handleSendMessage = async () => {
        if(InputMessage.trim() !== ''){
            setSentMessages([...sentMessages, InputMessage]);
            setMessageInput('');
            try {
                const updatedMessages = [...sentMessages, InputMessage];
                await AsyncStorage.setItem(dependenciasID, JSON.stringify(updatedMessages));

            }catch (error) {
                console.error('Error saving messages:', error);
            }
        }
    }

    return(
        <View key={id} style={stylesFormMessage.ContainerMain}>
            <View style={stylesFormMessage.ContainerTitle}>
                <Text style={stylesFormMessage.textName}>{name}</Text>
                <Text style={stylesFormMessage.textPhone}>{phone}</Text>
            </View>
            <View style={stylesFormMessage.ContainerMessage}>
                <ScrollView>
                    <View style={stylesFormMessage.ContainerContentMessage}>
                        <Text style={stylesFormMessage.textMessage}>{messages}</Text>
                    </View>
                    <View style={stylesFormMessage.ContainerContentUser}>
                        {sentMessages.map((message,index) => (
                            <View style={stylesFormMessage.ContainerContentMessage} key={index}>
                                <Text style={stylesFormMessage.textMessage}>{message}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
            <View style={stylesFormMessage.ContainerInput}>
                <TextInput
                    placeholder='Escribe tu mensaje'
                    placeholderTextColor={'#fff'}
                    style={stylesFormMessage.textInput}
                    value={InputMessage}
                    onChangeText={setMessageInput}
                />
                <Pressable style={stylesFormMessage.PressableSend} onPress={() => handleSendMessage()}>
                    <Image source={require('../assets/Send.png')} style={stylesFormMessage.ImageSend}/>
                </Pressable> 
            </View>
        </View>
    )
}