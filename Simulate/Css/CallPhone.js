import { Pressable, StyleSheet } from "react-native";
export const StylesPhoneCall = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#111',
    },
    ContainerMain: {
        width: '100%',
        height: '100%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    ContainerHeader: {
        
        width: '100%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textName: {
        fontSize: 35,
        letterSpacing: 2,
        color: '#eee',
        fontWeight: '500'
    },
    textPhone: {
        fontSize: 20,
        letterSpacing: 2,
        color: '#bbb',
        fontWeight: '500'
    },
    ContainerCall: {
        width: '85%',
        height: '30%',
        backgroundColor: '#222',
        borderRadius: 25 
        
    },
    ContentCall: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    ContainerImagenCall:{
        width: '45%',
        height: '80%',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    PressableImage: {
        width: '65%',
        height: '50%',
        borderRadius: 100,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 0 10px #aaa',
    },
    TextImage: {
        fontSize: 13,
        letterSpacing: 2,
        color: '#eee',
        fontWeight: '500',
    },
    ContainerCallImagen: {
        width: '20%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#800',
        boxShadow: '0 0 10px #aaa',
    },
    Pressable: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ImagenCallPhone: {
        width: '90%',
        height: '90%',
    }
})