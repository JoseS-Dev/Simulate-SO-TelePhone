import { StyleSheet } from "react-native";
export const StylesGmail = StyleSheet.create({
    ContainerGmail:{
        flex:1,
        backgroundColor: '#111',
        padding: 5,
        alignItems: 'center',
    },
    ContainerMain: {
        borderColor: '#fff',
        borderWidth: 1,
        height: '100%',
        width: '100%',
    },
    ContainerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderColor: '#fff',
        borderBottomWidth: 1,
        height: '5%',
    },
    textTitle: {
        color: '#eee',
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 2
    },
    ImageHeader: {
        width: 35,
        height: 35,
        resizeMode: 'cover'
    },
    ContainerNav: {
        borderColor: '#fff',
        borderWidth: 1,
        flexDirection: 'row',
        width: '100%',
        height: '5%',
        padding: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    PressableGmail: {
        
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1
    },
    PressabbleGmailText: {
        color: '#eee',
        fontSize: 11,
        fontWeight: '500',
        letterSpacing: 2
    },
    textDecoration: {
        textDecorationLine: 'underline',
        color: '#ddaa00'
    }
})

export const StylesStructureGmail = StyleSheet.create({
    ContentGmail: {
        borderColor: '#fff',
        borderWidth: 1,
        height: '30%',
        width: '100%',
        flexDirection: 'row',
    },
    ContainerContentGmail: {
        borderRightColor: '#fff',
        borderRightWidth: 1,
        width: '70%',
        height: '100%',
        justifyContent: 'space-between',
    },
    AsuntGmail: {
        borderBottomColor: '#fff',
        borderWidth: 1,
        width: '100%',
        height: '55%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    textFecha: {
        color: '#eee',
        fontSize: 11,
        fontWeight: '500',
        letterSpacing: 2,
    },
    textTitle: {
        color: '#eee',
        fontSize: 12,
        fontWeight: '500',
        letterSpacing: 2, 
    },
    ContainerTextContent: {
        
        width: '100%',
        height: '45%',
        justifyContent: 'center',
        paddingHorizontal: 5
    },
    textContent: {
        fontSize: 13,
        color: '#eee',
        fontWeight: '500',
        letterSpacing: 1
    },
    PressableGmail: {
        borderRightColor: '#fff',
        borderRightWidth: 1,
        width: '15%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Image: {
        width: 35,
        height: 35,
        resizeMode: 'cover'
    }

})