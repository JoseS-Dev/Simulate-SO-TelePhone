import {View, Text, Image} from 'react-native';
import { useEffect, useState } from 'react';
import { StylesAplications } from '../Css/Aplications';

export function Aplications(){
    return(
        <View style={StylesAplications.Container}>
            <View style={StylesAplications.ContainerAplication}>
                <View style={StylesAplications.InfoAplication}>
                    <Image style={StylesAplications.ImageAplication} source={require('../assets/Cof.png')}/>
                    <Text style={StylesAplications.TextAplication}>Settings</Text>
                </View>
                <View style={StylesAplications.InfoAplication}>
                    <Image style={StylesAplications.ImageAplication} source={require('../assets/Cof.png')}/>
                    <Text style={StylesAplications.TextAplication}>Settings</Text>
                </View>
            </View>
        </View>
    )
}