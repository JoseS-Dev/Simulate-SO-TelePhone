import { StyleSheet, TextInput } from "react-native";
export const StylesNotes = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#111',
        padding: 5
    },
    ContainerMain: {
        borderColor: '#fff',
        borderWidth: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    ContainerHeader: {
        borderColor: '#fff',
        borderWidth: 1,
        width: '100%',
        height: '6%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    textHeader: {
        color: '#eee',
        fontSize: 20,
        fontWeight: '500', 
        letterSpacing: 2   
    },
    ImageHeader: {
        width: 40,
        height: 40,
        resizeMode: 'cover'
    },
    ContainerNav: {
        borderColor: '#fff',
        borderWidth: 1,
        width: '100%',
        height: '6%',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center',
        flexDirection: 'row',
    },
    textNav: {
        color: '#eee',
        fontSize: 15,
        fontWeight: '500',
        letterSpacing: 1
    },
    PressableNav: {
        borderColor: '#fff',
        borderWidth: 1,
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#222'
    },
    ContentNotes: {
        borderColor: '#fff',
        borderWidth: 1,
        width: '100%',
        height: '8%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 3
    },
    ContainerContent: {
        borderColor: '#fff',
        borderRightWidth: 1,
        width: '85%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 5,
    },
    textContent: {
        color: '#eee',
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 1
    },
    textNotes: {
        color: '#eee',
        fontSize: 12,
        fontWeight: '500',
        letterSpacing: 1,
        paddingLeft: 5
    },
    PressableContent: {
        width: '15%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333'
    },
    PressableContentImage: {
        width: '80%',
        height: '80%',
        resizeMode: 'cover'
    },
    Modal: {
        width: '75%',
        height: '65%',
        backgroundColor: '#111',
        position: 'absolute',
        top: '17%',
        left: '13%',
        zIndex: 1,
        padding: 5,
    },
    ModalContainer: {
        borderRadius: 30,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        gap: 25,
        boxShadow: '0px 0px 5px #ddaa',
    },
    ModalTitle: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        width: '100%',
        height: '7%',
        color: '#eee',
        fontSize: 15,
        fontWeight: '500',
        letterSpacing: 1,
        textAlign: 'center',
        padding: 5
    },
    ModalContent:{
        width: '100%',
        height: '25%',
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    TextInput: {
        fontSize: 16,
        fontWeight: '500',
        color: '#eee',
        letterSpacing: 1,
        textAlign: 'left',
    },
    InputText: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        borderRightColor: '#fff',
        borderRightWidth: 1,
        width: '100%',
        height: '70%',
        fontSize: 12,
        fontWeight: '500',
        color: '#eee',
        letterSpacing: 1,
        padding: 10,
        borderRadius: 10
    },
    ModalContent_2: {
        width: '100%',
        height: '35%',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5
    },
    TextArea: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        borderRightColor: '#fff',
        borderRightWidth: 1,
        width: '100%',
        height: '70%',
        fontSize: 12,
        fontWeight: '500',
        color: '#eee',
        letterSpacing: 1,
        padding: 10,
        borderRadius: 10
    },
    ModalButton: {
        boxShadow: '0px 0px 10px #ddaa',
        width: '55%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#444',
        borderRadius: 25,
    }
})