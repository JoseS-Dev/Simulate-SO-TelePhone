import { StyleSheet } from "react-native";
export const StylesAplications = StyleSheet.create({
    Container: {
        borderBottomColor: '#333',
        borderBottomWidth: 1,
        width: '55%',
        height: '95%',
        padding: 10
    },
    ContainerAplication: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5
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