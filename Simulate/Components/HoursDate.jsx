import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { StylesHoursDate } from "../Css/HoursDate";
import { HoursDate } from "../Js/HoursDate";

export function HoursDate(){
    const[formattedHours, formattedMinutes, formattedDate] = HoursDate();
    return (
        <View style={StylesHoursDate.Container}>
            {hours >= 12 ? (
                <Text style={StylesHoursDate.textHours_minutes}>{formattedHours} : {formattedMinutes} PM</Text>
            ) : (
                <Text style={StylesHoursDate.textHours_minutes}>{formattedHours} : {formattedMinutes} AM</Text>
            )}
            <Text style={StylesHoursDate.textDate}>{formattedDate}</Text>
        </View>
    )
}