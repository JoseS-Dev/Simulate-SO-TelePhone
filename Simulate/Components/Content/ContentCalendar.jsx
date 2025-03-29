import { View, Text } from "react-native";
import { StylesCalendar } from "../../Css/Calendar";

export function ContentCalendar(){
    return(
        <View style={StylesCalendar.ContainerCalendar}>
            <Text style={StylesCalendar.TextCalendar}>Calendario</Text>
        </View>
    )
}