import {View, Text, Image} from 'react-native';
import { StylesAplicationsBottom } from "../../Css/AplicationsBottom";

export function ContentAplicationII(){
    return(
        <View style={StylesAplicationsBottom.ContainerSecondary}>
            <View style={StylesAplicationsBottom.InfoAplication}>
                <Image source={require('../../assets/Gmail/Gmail.png')} style={StylesAplicationsBottom.ImageAplication}/>
                <Text style={StylesAplicationsBottom.TextAplication}>Correo</Text>
            </View>
            <View style={StylesAplicationsBottom.InfoAplication}>
                <Image source={require('../../assets/Maps/Maps.png')} style={StylesAplicationsBottom.ImageAplication}/>
                <Text style={StylesAplicationsBottom.TextAplication}>Mapa</Text>
            </View>
            <View style={StylesAplicationsBottom.InfoAplication}>
                <Image source={require('../../assets/Notes/Notes.png')} style={StylesAplicationsBottom.ImageAplication}/>
                <Text style={StylesAplicationsBottom.TextAplication}>Notas</Text>
            </View>
            <View style={StylesAplicationsBottom.InfoAplication}>
                <Image source={require('../../assets/Gallery/Gallery.png')} style={StylesAplicationsBottom.ImageAplication}/>
                <Text style={StylesAplicationsBottom.TextAplication}>Galeria</Text>
            </View>
        </View>
    )
}