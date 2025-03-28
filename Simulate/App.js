import { StatusBar } from 'expo-status-bar';
import {View, ImageBackground } from 'react-native';
import { StylesGeneral } from './Css/General';
import { BarraIcon } from './Components/BarraIcon';
import { HoursDate } from './Components/HoursDate';
import { Aplications } from './Components/AplicationsRight';
import { InfoClimate } from './Components/InfoClimate'
import { useBattery } from './Js/Battery';

import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [batteryLevel, setBatteryLevel, backgroundColor, setBackgroundColor] = useBattery();
  return (
    <SafeAreaProvider>
      {batteryLevel > 0 ? (
        <View style={StylesGeneral.Container}>
        <ImageBackground source={require('./assets/Fondo.jpg')} style={StylesGeneral.ImagenBackground}>
          <BarraIcon/>
          <HoursDate/>
          <View style={StylesGeneral.ContainerAplications}>
            <InfoClimate/>
            <Aplications/>
          </View>
        </ImageBackground>
      </View>
      ) : (
        <View style={[StylesGeneral.Container, {backgroundColor: backgroundColor}]}></View>
      )}
    </SafeAreaProvider>
  );
}
