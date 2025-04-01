import {View, Text, Image, FlatList} from 'react-native';
import { StylesCall } from '../../Css/Call';

export function ContentCall(){
    return(
        <View style={StylesCall.ContainerCall}>
            <View style={StylesCall.ContainerCallHeader}> 
                <Text style={StylesCall.TextTitle}>Llamadas</Text>
                <Image source={require('../../assets/Phone/Phone.png')} style={StylesCall.ImageHeader}/>
            </View>
            <View style={StylesCall.ContainerNavCall}>
                <Text style={StylesCall.TextCall}>Teclado</Text>
                <Text style={[StylesCall.TextCall, StylesCall.Link]}>Recientes</Text>
                <Text style={StylesCall.TextCall}>Contactos</Text>
            </View>
            <View style={StylesCall.ContainerCallBody}>
                
            </View>
        </View>
    )
}