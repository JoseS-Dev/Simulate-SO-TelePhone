import { View, Text } from "react-native";
import { StylesGallery } from "../Css/Gallery";

export function ContentGallery(){
    return(
        <View style={StylesGallery.ContainerGallery}>
            <Text style={StylesGallery.TextGallery}>Galeria</Text>
        </View>
    )
}