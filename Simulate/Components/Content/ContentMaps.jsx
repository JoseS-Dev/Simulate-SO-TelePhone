import {View, Text} from 'react-native';
import { StylesMaps } from '../Css/Maps';

export function ContentMaps(){
    return(
        <View style={StylesMaps.ContainerMaps}>
            <Text style={StylesMaps.TextMaps}>Mapas</Text>
        </View>
    )
}