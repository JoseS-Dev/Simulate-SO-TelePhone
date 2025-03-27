import { StyleSheet } from "react-native";
export const StylesInfoClimate = StyleSheet.create({
    // Estilos para el contenedor del clima
    container: {
        borderColor: '#fff',
        borderWidth: 1,
        width: '40%',
        height: '35%',
        padding: 5,
        alignItems: 'center',
    },
    
    ContainerSecondary: {
        borderColor: '#fff',
        borderWidth: 1,
        width: '90%',
        height: '80%',
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    TextClima: {
        fontSize: 20,
        letterSpacing: 2,
        fontWeight: '500',
        color: '#eee',
    },
    
    ImageClima: {
        borderColor: '#fff',
        borderWidth: 1,
        width: '100%',
        height: '85%'
    },
    
    TextTemperature: {
        fontSize: 18,
        letterSpacing: 2,
        fontWeight: '500',
        color: '#eee',
    }
})