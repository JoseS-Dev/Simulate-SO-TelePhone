import {View, Text, Image} from 'react-native';
import { Link } from 'expo-router';
import { StylesCall } from '../Css/Call';

export function ContactsCall(){
    return (
        <View style={StylesCall.ContainerCall}>
            <View style={StylesCall.ContainerMain}>
                <View style={StylesCall.ContainerCallHeader}> 
                    <Text style={StylesCall.TextTitle}>Llamadas</Text>
                    <Image source={require('../assets/Phone/Phone.png')} style={StylesCall.ImageHeader}/>
                </View>
                <View style={StylesCall.ContainerNavCall}>
                    <Link href='/KeyBoardCall' style={StylesCall.TextCall}>Teclado</Link>
                    <Link href='/Call' style={StylesCall.TextCall}>Recientes</Link>
                    <Text style={[StylesCall.TextCall, StylesCall.Link]}>Contactos</Text>
                </View>
            </View>
        </View>
    );
}