import { StyleSheet } from "react-native";
export const stylesNav = StyleSheet.create({
    Container: {
        position: 'absolute',
        bottom: 5,
        left: '22%',
        height: '7%',
        zIndex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: '#bbb',
        borderWidth: 1,
        width: '55%',
        flexDirection: 'row',
        padding: 5,
        backgroundColor: '#111'
    },
    BarraNav: {
        width: '20%',
        height: '100%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 0px 2px #eee',
    },
    ImageNav: {
        width: 35,
        height: 35,
        resizeMode: 'cover',
    }
})