import { StyleSheet } from "react-native";
export const StylesAplicationsBottom = StyleSheet.create({
    ContainerMain: {
        borderWidth: 1,
        borderRightColor: '#333',
        borderRightWidth: 1,
        width: '55%',
        height: '100%',
        padding: 10,
    },
    ContainerSecondary: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    Pressable: {
        
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        
    },
    InfoAplication: {
        width: '45%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        padding: 5
    },
    ImageAplication: {
        borderColor: '#333',
        borderWidth: 2,
        padding: 5,
        height: '80%',
        width: '70%',
        borderRadius: 10,
        backgroundColor: '#111'

    },
    TextAplication: {
        color: '#fff',
        fontSize: 6,
        letterSpacing: 2,
        fontWeight: '500',
        width: '90%',
        textAlign: 'center',
    }
})