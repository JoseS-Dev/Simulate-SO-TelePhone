import {View, Text, Image} from 'react-native';
import { Link } from 'expo-router';
import { StylesCall } from '../Css/Call';
export function KeyBoardCall() {
    return (
        <View style={StylesCall.ContainerCall}>
                    <View style={StylesCall.ContainerMain}>
                        <View style={StylesCall.ContainerCallHeader}> 
                            <Text style={StylesCall.TextTitle}>Llamadas</Text>
                            <Image source={require('../assets/Phone/Phone.png')} style={StylesCall.ImageHeader}/>
                        </View>
                        <View style={StylesCall.ContainerNavCall}>
                            <Text style={[StylesCall.TextCall, StylesCall.Link]}>Teclado</Text>
                            <Link href='/Call' style={StylesCall.TextCall}>Recientes</Link>
                            <Link href='/Contacts' style={StylesCall.TextCall}>Contactos</Link>
                        </View>
                    </View>
                </View>
    );
}