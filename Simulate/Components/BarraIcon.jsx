import {View, Text, Image} from 'react-native';
import { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StylesIcon } from '../Css/BarraIcon';
export function BarraIcon(){
    const insets = useSafeAreaInsets();
    const [batteryLevel, setBatteryLevel] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setBatteryLevel(100)
        })
        const decreaseBattery = setInterval(() => {
            setBatteryLevel((dism) => {
                if(dism > 0){

                    return dism - 1
                }
                clearInterval(decreaseBattery)
                return 0
            })
        }, 5000)
        return () => {
            clearTimeout(timer)
            clearInterval(decreaseBattery)
        }
    }, []);

    return (
        <View style={[StylesIcon.containerMain, {paddingTop: insets.top}]}>
            <View style={StylesIcon.ContainerGeneral}>
                <View style={StylesIcon.ContainerSignal}>
                    <Text style={StylesIcon.textSignal}>Movistar</Text>
                </View>
                <View style={StylesIcon.ContainerRed}>
                    <Image source={require('../assets/wifi.png')} style = {StylesIcon.icon}/>
                    <Text style={StylesIcon.textBattery} id='batery'>{batteryLevel}%</Text>
                    {batteryLevel >= 50 ? (
                        <Image source={require('../assets/battery-full.png')} style = {StylesIcon.icon}/>
                    ) : batteryLevel >= 30 ? (
                        
                    )}
                </View>
            </View>
        </View>
    )
}
