import { StyleSheet } from "react-native";
export const StylesHoursDate = StyleSheet.create({
    Container: {
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        height: 150,
        borderRadius: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4
    },
    
    textHours_minutes: {
        fontSize: 35,
        letterSpacing: 1,
        fontWeight: '500',
        color: '#eee',
    },
    textDate: {
        fontSize: 20,
        letterSpacing: 2,
        fontWeight: '500',
        color: '#eee',
        
    }
})