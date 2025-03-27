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
        borderColor: '#fff',
        borderWidth: 1,
        width: '45%',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        padding: 5
    },
    ImageAplication: {
        borderColor: '#fff',
        borderWidth: 1,
        height: '50%',
        width: '70%',
        borderRadius: 50
    },
    TextAplication: {
        color: '#fff',
        fontSize: 8,
        letterSpacing: 2,
        fontWeight: '500',
    }
})