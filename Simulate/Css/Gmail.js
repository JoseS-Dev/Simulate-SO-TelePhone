import { StyleSheet } from "react-native";
export const StylesGmail = StyleSheet.create({
    ContainerGmail:{
        flex:1,
        backgroundColor: '#111',
        padding: 5,
        alignItems: 'center',
    },
    ContainerMain: {
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
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
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
        color: '#ddaa00',
        fontSize: 11,
        fontWeight: '500',
        letterSpacing: 2
    }
})

export const StylesStructureGmail = StyleSheet.create({
    ContentGmail: {
        borderColor: '#aaa',
        borderWidth: 1,
        height: 75,
        width: '100%',
        flexDirection: 'row',
        borderRadius: 5
    },
    ContainerContentGmail: {
        borderRightColor: '#aaa',
        borderRightWidth: 1,
        width: '70%',
        height: '100%',
        justifyContent: 'space-between',
    },
    AsuntGmail: {
        borderBottomColor: '#aaa',
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
        maxWidth: 200
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

export const StylesGmailInfo = StyleSheet.create({
    ContainerMain: {
        backgroundColor: '#111',
        flex: 1,
        padding: 5,
        alignItems: 'center',
    },
    ContainerInfo: {
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        width: '100%',
        height: '5%',
        flexDirection: 'row'
    },
    ContainerInfoText: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5
         
    },
    PressableGmail: {
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ImageBack: {
        width: 30,
        height: 30,
        resizeMode: 'cover'
    },
    textTitle: {
        color: '#eee',
        fontSize: 14,
        fontWeight: '500',
        letterSpacing: 1
    },
    textDate: {
        color: '#eee',
        fontSize: 11,
        fontWeight: '500',
        letterSpacing: 1,
        textAlign: 'center'
    },
    ContainerEmail: {
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        width: '100%',
        height: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textEmail: {
        color: '#eee',
        fontSize: 14,
        letterSpacing: 2,
        fontWeight: '500',
    },
    ContainerDetails: {
        borderColor: '#666',
        borderWidth: 0.5,
        width: '100%',
        height: '75%',
        padding: 5,
        alignContent: 'center',
    },
    textContent: {
        color: '#eee',
        fontWeight: '500',
        fontSize: 13,
        letterSpacing: 1,
        textAlign: 'center'
    },
    ButtonResponse: {
        borderColor: '#fff',
        borderWidth: 1,
        marginTop: 10,
        width: '45%',
        height: '5%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
        boxShadow: '0 0 5px #444',
    },
    textButton: {
        color: '#eee',
        fontSize: 12,
        fontWeight: '500',
        letterSpacing: 2
    },
    ModalContainer: {
        backgroundColor: '#111',
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },
    ModalContent: {
        width: '100%',
        height: '100%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15
    },
    ContainerModalHeader: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 14,
        color: '#eee',
        fontWeight: '500',
        letterSpacing: 1
    },
    ContainerModalBody: {
        width: '100%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    textBody: {
        fontSize: 12,
        color: '#eee',
        fontWeight: '500',
        letterSpacing: 1
    },
    InputText: {
        borderColor: '#aaa',
        borderWidth: 1,
        width: '100%',
        height: '70%',
        padding: 5,
        backgroundColor: '#222',
        color: '#eee',
        fontSize: 12,
        fontWeight: '500',
        letterSpacing: 1,
        borderRadius: 20,
    },
    ModalButton: {
        backgroundColor: '#222',
        width: '50%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
        borderRadius: 15,
        boxShadow: '0 0 5px #eee'
    },
    textModalButton: {
        color: '#eee',
        fontSize: 12,
        fontWeight: '500',
        letterSpacing: 2
    },
    ContainerContentMessage: {
        width: '100%',
        height: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: '#aaa',
        borderTopWidth: 1,
    },
    textMessage: {
        color: '#eee',
        fontSize: 12,
        fontWeight: '500',
        letterSpacing: 1,
        textAlign: 'center'
    }
})