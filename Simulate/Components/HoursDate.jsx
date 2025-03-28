import { View, Text } from "react-native";
import { StylesHoursDate } from "../Css/HoursDate";
import { useHoursDate } from "../Js/HoursDate";

export function HoursDate(){
    const[formattedHours, formattedMinutes, formattedDate] = useHoursDate();
    return (
        <View style={StylesHoursDate.Container}>
            {formattedHours >= 12 ? (
                <Text style={StylesHoursDate.textHours_minutes}>{formattedHours} : {formattedMinutes} PM</Text>
            ) : (
                <Text style={StylesHoursDate.textHours_minutes}>{formattedHours} : {formattedMinutes} AM</Text>
            )}
            <Text style={StylesHoursDate.textDate}>{formattedDate}</Text>
        </View>
    )
}