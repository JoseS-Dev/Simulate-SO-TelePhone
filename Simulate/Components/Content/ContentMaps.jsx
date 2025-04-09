import {View, Text} from 'react-native';
import { StylesMaps } from '../../Css/Maps';
import { MapView } from 'react-native-maps';

export function ContentMaps(){
    return(
        <View style={StylesMaps.ContainerMaps}>
            <MapView
                
            ></MapView>
        </View>
    )
}