import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { StylesHoursDate } from "../Css/HoursDate";

export function HoursDate(){
    const [date, newDate] = useState(new Date());
    const [hours, newHours] = useState(date.getHours());
    const [minutes, newMinutes] = useState(date.getMinutes());
    useEffect(() => {
        const timer = setInterval(() => {
            newDate(new Date);
        })
        const HoursandMinutes = setInterval(() => {
            if(date.getHours() !== hours || date.getMinutes() !== minutes){
                newHours(date.getHours())
                newMinutes(date.getMinutes())
            }
        })
        return () => {
            clearInterval(timer)
            clearInterval(HoursandMinutes)
        }
    }, []);
    
    return (
        <View style={StylesHoursDate}>
            <Text>{hours}:{minutes}</Text>
            <Text>{date}</Text>
        </View>
    )
}