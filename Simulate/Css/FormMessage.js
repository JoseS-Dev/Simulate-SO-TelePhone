import { Pressable, StyleSheet } from "react-native";
export const stylesFormMessage = StyleSheet.create({
    ContainerMain: {
        backgroundColor: '#111',
        width: '100%',
        height: '100%',
    },
    ContainerTitle: {
        borderBottomColor: '#333',
        borderWidth: 1,
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textName: {
        fontSize: 15,
        letterSpacing: 2,
        color: '#eee',
        fontWeight: '500'
    },
    textPhone: {
        fontSize: 10,
        letterSpacing: 2,
        color: '#888',
        fontWeight: '500'
    },
    ContainerMessage: {
        width: '100%',
        height: '80%',
        borderLeftColor: '#333',
        borderRightColor: '#333',
        borderBottomColor: '#333',
        borderWidth: 1,
        padding: 15,
        gap: 10,
    },
    ContainerContentMessage: {
        borderColor: '#ddaa',
        borderWidth: 1,
        width: '50%',
        padding: 5,
        borderRadius: 15,
        backgroundColor: '#000'
    },
    textMessage: {
        fontSize: 13,
        letterSpacing: 2,
        color: '#eee',
        fontWeight: '500'
    },
    ContainerContentUser: {
        width: '100%',
        height: 'auto',
        padding: 5,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        gap: 5,
    },
    ContainerInput: {
        width: '100%',
        height: 80,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    textInput: {
        borderColor: '#eee',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        width: '75%',
        height: '95%',
        color: '#fff',
        fontSize: 15,
        letterSpacing: 1,
        borderRadius: 10,
        paddingLeft: 10
    },
    PressableSend: {
        width: '25%',
        height: '95%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ImageSend: {
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
    }
})