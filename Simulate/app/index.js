import { BarraIcon } from "../Components/BarraIcon";
import { InfoClimate } from "../Components/InfoClimate";
import { HoursDate } from "../Components/HoursDate";
import { AplicationsRight } from "../Components/AplicationsRight";
import { AplicationsBottom } from "../Components/AplicationsBottom";
import { StylesGeneral } from "../Css/General";
import { View, ImageBackground } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useBattery } from "../Js/Battery";

export default function App(){
    const [batteryLevel, setBatteryLevel, backgroundColor, setBackgroundColor] = useBattery();
      return (
        <SafeAreaProvider>
          {batteryLevel > 0 ? (
            <View style={StylesGeneral.Container}>
            <ImageBackground source={require('../assets/Fondo.jpg')} style={StylesGeneral.ImagenBackground}>
              <BarraIcon/>
              <HoursDate/>
              <View style={StylesGeneral.ContainerAplications}>
                <InfoClimate/>
                <AplicationsRight/>
              </View>
              <View style={StylesGeneral.ContainerAplications_2}>
                <AplicationsBottom/>
              </View>
            </ImageBackground>
          </View>
          ) : (
            <View style={[StylesGeneral.Container, {backgroundColor: backgroundColor}]}></View>
          )}
        </SafeAreaProvider>
      );
}
