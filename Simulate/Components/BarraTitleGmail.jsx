import {View, Text, Image} from 'react-native';
import { StylesGmail } from '../Css/Gmail';

export function BarraTitleGmail(){
    return(
        <View style={StylesGmail.ContainerHeader}>
            <Text style={StylesGmail.textTitle}>Gmail</Text>
            <Image style={StylesGmail.ImageHeader} source={require('../assets/Gmail/Gmail.png')}/>
        </View>
    )
}