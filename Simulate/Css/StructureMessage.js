import { Pressable, StyleSheet } from "react-native";
export const StylesStructureMessage = StyleSheet.create({
    containerMessage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 15,
        width: '100%',
        height: 70,
        padding: 5,
        backgroundColor: '#222',
        marginBottom: 3, 
    },
    container: {
        width: '90%',
        paddingLeft: 5,
        alignContent: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        fontSize: 18,
        letterSpacing: 2,
        color: '#fff'
    },
    textmessage: {
        fontSize: 14,
        fontWeight: '500',
        color: '#aaa',
        maxWidth: '80%',
    },
    Pressable: {
        width: '10%',
        paddingRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ImageDelete: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    }
})