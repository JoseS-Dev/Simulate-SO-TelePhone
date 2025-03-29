import {View, Text } from 'react-native';
import { StylesSettings } from '../Css/Settings';

export function ContentSettings(){
    return(
        <View style={StylesSettings.ContainerSettings}>
            <Text style={StylesSettings.TextSettings}>Configuraciones</Text>
        </View>
    )
}