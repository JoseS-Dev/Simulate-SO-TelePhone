import {View, Text, Image, Pressable, TouchableHighlight, Modal, KeyboardAvoidingView, Platform, TextInput} from 'react-native';
import { Link } from 'expo-router';
import { StylesGmailInfo } from '../../Css/Gmail';
import { useGlobalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function StructureInfoGmail(){
    const{id, Name, Date, Content, Email} = useGlobalSearchParams()
    const[ModalVisible, setModalVisible] = useState(false);
    const[InputText, setInput] = useState('');
    const[sentGmail, setSentGmail] = useState([]);
    const dependenciasID = `enviarmensaje-${id}`;
    
    useEffect(() => {
        const loadMessages = async () => {
            try{
                const storedMessages = await AsyncStorage.getItem(dependenciasID);
                if(storedMessages){
                    setSentGmail(JSON.parse(storedMessages));
                }
            }
            catch(err){
                console.error('Error loading messages:', err);
            }
        }
        loadMessages();
    },[dependenciasID]);

    // Funcion para enviar mensajes 
    const handleSendMessage = async () => {
        if(InputText.trim() !== ''){
            setSentGmail([...sentGmail, InputText]);
            setInput('');
            try {
                const updatedMessages = [...sentGmail, InputText];
                await AsyncStorage.setItem(dependenciasID, JSON.stringify(updatedMessages));
                setModalVisible(false);
            }
            catch(err){
                console.error('Error saving messages:', err);
            }
        }
    }
    
    return(
        <View style={StylesGmailInfo.ContainerMain}>
            <View style={StylesGmailInfo.ContainerInfo}>
                <View style={StylesGmailInfo.ContainerInfoText}>
                    <Link href='/Gmail' asChild>
                        <Pressable style={StylesGmailInfo.PressableGmail}>
                            <Image style={StylesGmailInfo.ImageBack} source={require('../../assets/Back.png')}/>
                        </Pressable>
                    </Link>
                    <Text style={StylesGmailInfo.textTitle}>{Name}</Text>
                    <Text style={StylesGmailInfo.textDate}>{Date}</Text>
                </View>
            </View>
            <View style={StylesGmailInfo.ContainerEmail}>
                <Text style={StylesGmailInfo.textEmail}>{Email}</Text>
            </View>
            <View style={StylesGmailInfo.ContainerDetails}>
                <Text style={StylesGmailInfo.textContent}>{Content}</Text>
                {sentGmail.map((message, index) => (
                    <View style={StylesGmailInfo.ContainerContentMessage} key={index}>
                        <Text style={StylesGmailInfo.textMessage}>{message}</Text>
                    </View>
                ))}
            </View>
            <TouchableHighlight style={StylesGmailInfo.ButtonResponse} onPress={() => setModalVisible(true)}>
                <Text style={StylesGmailInfo.textButton}>Responder</Text>
            </TouchableHighlight>
            <Modal
                visible={ModalVisible}
                transparent={true}
                animationType='slide'
            >
                <KeyboardAvoidingView
                    style={StylesGmailInfo.ModalContainer}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <View style={StylesGmailInfo.ModalContent}>
                        <View style={StylesGmailInfo.ContainerModalHeader}>
                            <Text style={StylesGmailInfo.textHeader}>Responder a {Name}</Text>
                        </View>
                        <View style={StylesGmailInfo.ContainerModalBody}>
                            <Text style={StylesGmailInfo.textBody}>Escriba su respuesta</Text>
                            <TextInput
                                placeholderTextColor={'#fff'}
                                style={StylesGmailInfo.InputText}
                                multiline={true}
                                numberOfLines={10}
                                value={InputText}
                                onChangeText={(text) => setInput(text)}
                            />
                        </View>
                        <TouchableHighlight style={StylesGmailInfo.ModalButton} onPress={() => handleSendMessage()}>
                            <Text style={StylesGmailInfo.textModalButton}>Enviar</Text>
                        </TouchableHighlight>
                    </View>
                </KeyboardAvoidingView>
            </Modal>
        </View>
    )
}