import {View, Text, Image} from 'react-native';
import { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StylesIcon } from '../Css/BarraIcon';
import { useBattery } from '../Js/Battery';
export function BarraIcon(){
    const insets = useSafeAreaInsets();
    const[batteryLevel, setBatteryLevel, backgroundColor, setBackgroundColor] = useBattery();
    return (
        <View style={[StylesIcon.containerMain, {paddingTop: insets.top}]}>
            <View style={StylesIcon.ContainerGeneral}>
                <View style={StylesIcon.ContainerSignal}>
                    <Text style={StylesIcon.textSignal}>Movistar</Text>
                </View>
                <View style={StylesIcon.ContainerRed}>
                    <Image source={require('../assets/Icon/wifi.png')} style = {StylesIcon.icon}/>
                    <Text style={StylesIcon.textBattery}>{batteryLevel}%</Text>
                    {batteryLevel >= 50 ? (
                        <Image source={require('../assets/Battery/battery-full.png')} style = {StylesIcon.icon}/>
                    ) : batteryLevel >= 30 ? (
                        <Image source={require('../assets/Battery/battery-medium.png') } style = {StylesIcon.icon}/>
                    ) : batteryLevel >= 10 ? (
                        <Image source={require('../assets/Battery/battery-low.png')} style = {StylesIcon.icon}/>
                    ) : (
                        <Image source={require('../assets/Battery/battery.png')} style = {StylesIcon.icon}/>
                    )}
                </View>
            </View>
        </View>
    )
}
