import {View, Text } from 'react-native';
import { stylesSettings } from '../../Css/Settings';

export function ContentSettings(){
    return(
        <View style={stylesSettings.ContainerSettings}>
            <Text style={stylesSettings.TextSettings}>Configuraciones</Text>
        </View>
    )
}