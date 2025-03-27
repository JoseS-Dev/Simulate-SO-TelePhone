import {View, Text, Image} from 'react-native';
import { useEffect, useState } from 'react';
import { StylesAplications } from '../Css/Aplications';

export function Aplications(){
    return(
        <View style={StylesAplications.Container}>
            <View style={StylesAplications.ContainerAplication}>
                <View style={StylesAplications.InfoAplication}>
                    <Image style={StylesAplications.ImageAplication}/>
                    <Text style={StylesAplications.TextAplication}>Aplicacion 1</Text>
                </View>
            </View>
        </View>
    )
}