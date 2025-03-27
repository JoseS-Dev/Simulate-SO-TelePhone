import { StatusBar } from 'expo-status-bar';
import {View, ImageBackground } from 'react-native';
import { StylesGeneral } from './Css/General';
import { BarraIcon } from './Components/BarraIcon';
import { HoursDate } from './Components/HoursDate';
import { Aplications } from './Components/Aplications';
import { InfoClimate } from './Components/InfoClimate';

import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
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
    </SafeAreaProvider>
  );
}
