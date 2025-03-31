import { View, Text, Pressable, Image, TextInput } from 'react-native';
import { stylesFormMessage } from '../Css/FormMessage';
import { useGlobalSearchParams } from 'expo-router';

export function FormMessage(){
    const { id, name, phone, messages } = useGlobalSearchParams();
    return(
        <View key={id} style={stylesFormMessage.ContainerMain}>
            <View style={stylesFormMessage.ContainerTitle}>
                <Text style={stylesFormMessage.textName}>{name}</Text>
                <Text style={stylesFormMessage.textPhone}>{phone}</Text>
            </View>
            <View style={stylesFormMessage.ContainerMessage}>
                <View style={stylesFormMessage.ContainerContentMessage}>
                    <Text style={stylesFormMessage.textMessage}>{messages}</Text>
                </View>
            </View>
            <View style={stylesFormMessage.ContainerInput}>
                <TextInput
                    placeholder='Escribe tu mensaje'
                    placeholderTextColor={'#fff'}
                    style={stylesFormMessage.textInput}
                />
                <Pressable style={stylesFormMessage.PressableSend}>
                    <Image source={require('../assets/Send.png')} style={stylesFormMessage.ImageSend}/>
                </Pressable> 
            </View>
        </View>
    )
}