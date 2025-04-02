import {View, Text, Image, Pressable} from 'react-native';
import { Link } from 'expo-router';
import { StylesCall } from '../../Css/Call';

export function StructureCallBody({Call}){
    return(
        <View style={StylesCall.ContentCall}>
            <View style={StylesCall.ContainerName}>
                <Text style={StylesCall.TextName}>{Call.name}</Text>
                <Text style={StylesCall.TextCall}>{Call.phone}</Text>
            </View>
            <Link href={{pathname:'/CallPhone', params:{name: Call.name, Phone: Call.phone}}} asChild>
                <Pressable style={StylesCall.PressableCall}>
                    <View style={StylesCall.ContainerCallImage}>
                        <Image source={require('../../assets/Phone/Phone.png')} style={StylesCall.ImageCall}/>
                    </View>
                </Pressable>
            </Link>
        </View>
    )
}