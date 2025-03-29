import {View, Text, Image, Pressable} from 'react-native';
import { StylesAplications } from '../../Css/Aplications';
import { Link } from 'expo-router';

export function ContentAplication(){
    return(
        <View style={StylesAplications.ContainerAplication}>
            <View style={StylesAplications.InfoAplication}>
                <Link href="/Settings" asChild>
                    <Pressable style={StylesAplications.Pressable}>
                        <Image style={StylesAplications.ImageAplication} source={require('../../assets/Settings/Cof.png')}/>
                        <Text style={StylesAplications.TextAplication}>Settings</Text>
                    </Pressable>
                </Link>
            </View>
            <View style={StylesAplications.InfoAplication}>
                <Link href="/Calculate" asChild>
                    <Pressable style={StylesAplications.Pressable}>
                    <Image style={StylesAplications.ImageAplication} source={require('../../assets/Calculate/Calculate.png')}/>
                    <Text style={StylesAplications.TextAplication}>Calculadora</Text>
                    </Pressable>
                </Link>
            </View>
            <View style={StylesAplications.InfoAplication}>
                <Link href="/Calendar" asChild>
                    <Pressable style={StylesAplications.Pressable}>
                        <Image style={StylesAplications.ImageAplication} source={require('../../assets/Calendar/Calendar.png')}/>
                        <Text style={StylesAplications.TextAplication}>Calendario</Text>
                    </Pressable>
                </Link>
            </View>
            <View style={StylesAplications.InfoAplication}>
                <Link href="/Call" asChild>
                    <Pressable style={StylesAplications.Pressable}>
                        <Image style={StylesAplications.ImageAplication} source={require('../../assets/Phone/Phone.png')}/>
                        <Text style={StylesAplications.TextAplication}>Llamada</Text>
                    </Pressable>
                </Link>
            </View>
            <View style={StylesAplications.InfoAplication}>
                <Link href="/Camera" asChild>
                    <Pressable style={StylesAplications.Pressable}>
                        <Image style={StylesAplications.ImageAplication} source={require('../../assets/Camera/Camera.png')}/>
                        <Text style={StylesAplications.TextAplication}>Camara</Text>
                    </Pressable>
                </Link>
            </View>
            <View style={StylesAplications.InfoAplication}>
                <Link href='/Message' asChild>
                    <Pressable style={StylesAplications.Pressable}>
                        <Image style={StylesAplications.ImageAplication} source={require('../../assets/Message/Message.png')}/>
                        <Text style={StylesAplications.TextAplication}>Mensajes</Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    )
}