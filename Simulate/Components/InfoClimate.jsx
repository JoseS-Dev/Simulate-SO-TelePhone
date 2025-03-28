import {View, Text, Image} from 'react-native';
import { useEffect, useState } from 'react';
import { StylesInfoClimate } from '../Css/InfoClimate';
import { getClimate } from '../Js/Climate.js';

export function InfoClimate(){
    const [climate, setClimate] = useState({});
    useEffect(() => {
        getClimate().then((data) => {
            setClimate(data);
        })
        console.log(climate)
    }, [])
    
    return (
        <View style={StylesInfoClimate.container}>
            <Text style={StylesInfoClimate.TextClima}>Clima</Text>
            <View style={StylesInfoClimate.ContainerSecondary}>
                <Image source={{uri: climate.Icon}} style={StylesInfoClimate.ImageClima} />
                <View style={StylesInfoClimate.ContainerInfoTemperature}>
                    <Text style={StylesInfoClimate.TextTemperature}>{climate.Temperature}</Text>
                    <Text style={StylesInfoClimate.TextUbicacion}>{climate.Location}</Text>
                </View>
            </View>
        </View>
    )
}