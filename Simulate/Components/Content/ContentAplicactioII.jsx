import {View, Text, Image, Pressable} from 'react-native';
import { StylesAplicationsBottom } from "../../Css/AplicationsBottom";
import { Link } from 'expo-router';
export function ContentAplicationII(){
    return(
        <View style={StylesAplicationsBottom.ContainerSecondary}>
            <View style={StylesAplicationsBottom.InfoAplication}>
                <Link href="/Gmail" asChild>
                    <Pressable style={StylesAplicationsBottom.Pressable}>
                        <Image source={require('../../assets/Gmail/Gmail.png')} style={StylesAplicationsBottom.ImageAplication}/>
                        <Text style={StylesAplicationsBottom.TextAplication}>Correo</Text>
                    </Pressable>
                </Link>
            </View>
            <View style={StylesAplicationsBottom.InfoAplication}>
                <Link href="/Maps" asChild>
                    <Pressable style={StylesAplicationsBottom.Pressable}>
                        <Image source={require('../../assets/Maps/Maps.png')} style={StylesAplicationsBottom.ImageAplication}/>
                        <Text style={StylesAplicationsBottom.TextAplication}>Mapas</Text>
                    </Pressable>
                </Link>
            </View>
            <View style={StylesAplicationsBottom.InfoAplication}>
                <Link href="/Notes" asChild>
                    <Pressable style={StylesAplicationsBottom.Pressable}>
                        <Image source={require('../../assets/Notes/Notes.png')} style={StylesAplicationsBottom.ImageAplication}/>
                        <Text style={StylesAplicationsBottom.TextAplication}>Notas</Text>
                    </Pressable>
                </Link>
            </View>
            <View style={StylesAplicationsBottom.InfoAplication}>
                <Link href="/gallery" asChild>
                    <Pressable style={StylesAplicationsBottom.Pressable}>
                        <Image source={require('../../assets/Gallery/Gallery.png')} style={StylesAplicationsBottom.ImageAplication}/>
                        <Text style={StylesAplicationsBottom.TextAplication}>Galeria</Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    )
}