import { StyleSheet } from "react-native";
export const StylesInfoClimate = StyleSheet.create({
    // Estilos para el contenedor del clima
    container: {
        width: '45%',
        height: '100%',
        padding: 3,
        alignItems: 'center',
        borderRightColor: '#333',
        borderRightWidth: 1,
        borderBottomColor: '#333',
        borderBottomWidth: 1,
    },
    
    ContainerSecondary: {
        width: '90%',
        height: '80%',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopColor: '#fff',
        borderTopWidth: 1,
        gap: 30,
    },
    
    TextClima: {
        fontSize: 20,
        letterSpacing: 2,
        fontWeight: '500',
        color: '#eee',
    },
    
    ImageClima: {
        width: '100%',
        height: '85%',
    },
    ContainerInfoTemperature: {
        borderColor: '#fff',
        borderWidth: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#246'
    },
    TextTemperature: {
        fontSize: 18,
        letterSpacing: 2,
        fontWeight: '500',
        color: '#eee',
    },
    TextUbicacion: {
        fontSize: 12,
        letterSpacing: 2,
        fontWeight: '500',
        color: '#eee',
    },
})