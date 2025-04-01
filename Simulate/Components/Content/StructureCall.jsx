import {View, Text, Image, Pressable} from 'react-native';
import { StylesCall } from '../../Css/Call';

export function StructureCallBody({Call}){
    return(
        <View style={StylesCall.ContentCall}>
            <View style={StylesCall.ContainerName}>
                <Text style={StylesCall.TextName}>{Call.name}</Text>
                <Text style={StylesCall.TextCall}>{Call.Phone}</Text>
            </View>
            <Pressable style={StylesCall.PressableCall}>
                <View style={StylesCall.ContainerCallImage}>
                    <Image source={require('../../assets/Phone/Phone.png')} style={StylesCall.ImageCall}/>
                </View>
            </Pressable>
        </View>
    )
}