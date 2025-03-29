import { StyleSheet } from "react-native";
import { Button } from "react-native-web";
export const stylesCalculate = StyleSheet.create({
    ContainerCalculate:{
        flex: 1,
        backgroundColor: '#111',
        width: '100%',
        height: '100%',
    },
    ContainerResult: {
        borderBottomColor: '#ddaa',
        borderWidth: 1,
        height: '20%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10
    },
    TextResult: {
        fontSize: 55,
        color: '#fff',
        fontWeight: '500'
    },
    ContainerButton: {
        width: '100%',
        height: '16%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
        
    },
    ContainerButton_Equal: {
        width: '100%',
        height: '16%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
    Button: {
        width: '24%',
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222',
        borderRadius: 100
        
    },
    Button_Equal: {
        width: '24%',
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#040',
        borderRadius: 120,
    },
    TextButton: {
        fontSize: 30,
        color: '#E0E0E0',
        fontWeight: '500',
        letterSpacing: 1
    }, 
    TextButton_Delete: {
        fontSize: 30,
        color: '#e00',
        fontWeight: '500',
        letterSpacing: 1,
    },
    TextButton_Equal: {
        fontSize: 30,
        color: '#eee',
        fontWeight: '500',
        letterSpacing: 1,
    },
    TextButton_Operator: {
        fontSize: 30,
        color: '#0ea',
        fontWeight: '500',
        letterSpacing: 1,
    },
    
})