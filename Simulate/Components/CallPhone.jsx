import {View, Text, Image, Pressable} from 'react-native';
import { StylesPhoneCall } from '../Css/CallPhone';
import { Link } from 'expo-router';
import { useGlobalSearchParams } from 'expo-router';

export function CallPhone(){
    const { name, Phone } = useGlobalSearchParams();
    return(
        <View style={StylesPhoneCall.Container}>
            <View style={StylesPhoneCall.ContainerMain}>
                <View style={StylesPhoneCall.ContainerHeader}>
                    <Text style={StylesPhoneCall.textName}>{name}</Text>
                    <Text style={StylesPhoneCall.textPhone}>{Phone}</Text>
                </View>
                <View style={StylesPhoneCall.ContainerCall}>
                    <View style={StylesPhoneCall.ContentCall}>
                        <View style={StylesPhoneCall.ContainerImagenCall}>
                            <Pressable style={StylesPhoneCall.PressableImage}>
                                <Image source={require('../assets/Altavoz.png')} style={StylesPhoneCall.ImagenCallPhone}/>
                            </Pressable>
                            <Text style={StylesPhoneCall.TextImage}>Altavoz</Text>
                        </View>
                        <View style={StylesPhoneCall.ContainerImagenCall}>
                            <Pressable style={StylesPhoneCall.PressableImage}>
                                <Image source={require('../assets/Silencio.png')} style={StylesPhoneCall.ImagenCallPhone}/>
                            </Pressable>
                            <Text style={StylesPhoneCall.TextImage}>Silencio</Text>
                        </View>
                    </View>
                </View>
                <View style={StylesPhoneCall.ContainerCallImagen}>
                    <Link href='/Call' asChild>
                        <Pressable style={StylesPhoneCall.Pressable}>
                            <Image style={StylesPhoneCall.ImagenCallPhone} source={require('../assets/Over.png')}/>  
                        </Pressable>      
                    </Link>
                </View>
            </View>
        </View>
    )
}