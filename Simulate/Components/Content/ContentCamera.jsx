import { View, Text } from "react-native";
import { stylesCamera } from "../../Css/Camera";

export function ContentCamera(){
    return(
        <View style={stylesCamera.ContainerCamera}>
            <Text style={stylesCamera.TextCamera}>Cámara</Text>
        </View>
    )
}