import { StyleSheet } from "react-native";
export const StylesCall = StyleSheet.create({
    ContainerCall: {
        flex: 1,
        backgroundColor: '#111',
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 1,
    },
    ContainerMain: {
        borderColor: '#fff',
        borderWidth: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',

    },
    ContainerCallHeader: {
        borderColor: '#fff',
        borderWidth: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '5%',
        padding: 5
    },
    TextTitle: {
        color: '#eee',
        fontSize: 16,
        letterSpacing: 2,
        fontWeight: '500'
    },
    ImageHeader: {
        width: 35,
        height: 35
    },
    ContainerNavCall: {
        borderColor: '#fff',
        borderWidth: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '6%'
    },
    TextCall: {
        color: '#eee',
        fontSize: 12,
        letterSpacing: 1,
        fontWeight: '500',
        
    },
    Link: {
        textDecorationLine: 'underline',
        color:'#ddaa11',
    },
    ContentCall: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: '#222',
        marginBottom: 2        
    },
    ContainerName: {
        borderRightColor: '#aaa',
        borderRightWidth: 1,
        width: '80%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 8
    },
    ContainerLoading: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextName: {
        color: '#eee',
        fontSize: 15,
        letterSpacing: 1,
        fontWeight: '500'
    },
    PressableCall: {
        
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ContainerCallImage: {
        borderRadius: 50,
        
        width: '65%',
        height: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#272',
        boxShadow: '0 0 5px #ddaa'
    },
    ImageCall: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain'
    },
})