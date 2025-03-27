import {View, Text, Image} from 'react-native';
import { useEffect, useState } from 'react';
import { StylesInfoClimate } from '../Css/InfoClimate';

export function InfoClimate(){
    return (
        <View style={StylesInfoClimate.container}>
            <Text style={StylesInfoClimate.TextClima}>Clima</Text>
            <View style={StylesInfoClimate.ContainerSecondary}>
                <Image style={StylesInfoClimate.ImageClima}/>
                <Text style={StylesInfoClimate.TextTemperature}>28 C</Text>
            </View>
        </View>
    )
}