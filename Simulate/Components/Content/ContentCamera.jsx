import { View, Text } from "react-native";
import { StylesCamera } from "../Css/Camera";

export function ContentCamera(){
    return(
        <View style={StylesCamera.ContainerCamera}>
            <Text style={StylesCamera.TextCamera}>Cámara</Text>
        </View>
    )
}