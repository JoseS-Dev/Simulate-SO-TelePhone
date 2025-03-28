import {View, Text, Image} from 'react-native';
import { StylesAplications } from '../Css/Aplications';
import { ContentAplication } from './Content/ContentAplications';

export function AplicationsRight(){
    return(
        <View style={StylesAplications.Container}>
            <ContentAplication/>
        </View>
    )
}