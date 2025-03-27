import { StyleSheet } from "react-native";
export const StylesAplications = StyleSheet.create({
    Container: {
        borderWidth: 1,
        borderColor: '#fff',
        width: '55%',
        padding: 10
    },
    ContainerAplication: {
        borderColor: '#fff',
        borderWidth: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    InfoAplication: {
        width: '45%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        padding: 5
    },
    ImageAplication: {
        borderColor: '#333',
        borderWidth: 2,
        padding: 5,
        height: '60%',
        width: '70%',
        borderRadius: 50,
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