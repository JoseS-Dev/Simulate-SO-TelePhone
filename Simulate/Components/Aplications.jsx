import {View, Text, Image} from 'react-native';
import { StylesAplications } from '../Css/Aplications';

export function Aplications(){
    return(
        <View style={StylesAplications.Container}>
            <View style={StylesAplications.ContainerAplication}>
                <View style={StylesAplications.InfoAplication}>
                    <Image style={StylesAplications.ImageAplication} source={require('../assets/Settings/Cof.png')}/>
                    <Text style={StylesAplications.TextAplication}>Settings</Text>
                </View>
                <View style={StylesAplications.InfoAplication}>
                    <Image style={StylesAplications.ImageAplication} source={require('../assets/Calculate/Calculate.png')}/>
                    <Text style={StylesAplications.TextAplication}>Calculadora</Text>
                </View>
                <View style={StylesAplications.InfoAplication}>
                    <Image style={StylesAplications.ImageAplication} source={require('../assets/Calendar/Calendar.png')}/>
                    <Text style={StylesAplications.TextAplication}>Calendario</Text>
                </View>
                <View style={StylesAplications.InfoAplication}>
                    <Image style={StylesAplications.ImageAplication} source={require('../assets/Phone/Phone.png')}/>
                    <Text style={StylesAplications.TextAplication}>Llamada</Text>
                </View>
                <View style={StylesAplications.InfoAplication}>
                    <Image style={StylesAplications.ImageAplication} source={require('../assets/Camera/Camera.png')}/>
                    <Text style={StylesAplications.TextAplication}>Camera</Text>
                </View>
                <View style={StylesAplications.InfoAplication}>
                    <Image style={StylesAplications.ImageAplication} source={require('../assets/Message/Message.png')}/>
                    <Text style={StylesAplications.TextAplication}>Mensajes</Text>
                </View>
            </View>
        </View>
    )
}