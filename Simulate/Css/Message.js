import { StyleSheet } from "react-native";
export const StylesMessage = StyleSheet.create({
    containerMessage: {
        flex: 1,
        backgroundColor: '#111',
        width: '100%',
        padding: 5,
        height: '90%'
    },
    ContainerMain: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    ContainerTitle: {
        borderBottomColor: '#aaa',
        borderWidth: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        height: 'auto',
        flexDirection: 'row'
    },
    ImageMessage: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 20,
        letterSpacing: 2,
        color: '#eee',
        fontWeight: '500',
        paddingLeft: 5,
    },
    ContainerStructureMessage: {
        width: '100%',
        height: 'auto',
    }
})