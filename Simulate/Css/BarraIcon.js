import { StyleSheet } from "react-native";

export const StylesIcon = StyleSheet.create({
    containerMain: {
        borderColor: '#000',
        borderWidth: 1,
        width: '100%',
        flexDirection: 'row',
        padding: 5,
    },
    ContainerGeneral: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ContainerSignal: {
        width: '70%',
        justifyContent: 'flex-start',
        paddingLeft: 5
    },
    textSignal: {
        fontSize: 20,
        letterSpacing: 2,
        color: '#eee',
    },
    ContainerRed: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 15,
        alignContent: 'center',
    },
    textBattery: {
        fontSize: 20,
        letterSpacing: 2,
        color: '#eee',
    },
    icon: {
        width: 27,
        height: 27,

    }
})