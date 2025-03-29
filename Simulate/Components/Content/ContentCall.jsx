import {View, Text} from 'react-native';
import { StylesCall } from '../../Css/Call';

export function ContentCall(){
    return(
        <View style={StylesCall.ContainerCall}>
            <Text style={StylesCall.TextCall}>Llamadas</Text>
        </View>
    )
}