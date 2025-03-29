import {View, Text, TouchableHighlight } from "react-native";
import { stylesCalculate } from "../../Css/Calculate";
import { useState } from "react";

export function ContentCalculate(){
    const [expresion, setExpresion] = useState('')

    //Funcion para selleconar el numero
    const ButtonOperator = (value) => {
        if(value){
            setExpresion(expresion + value);
        }
    }
    // Funcion para limpiar el resultado
    const ButtonLimpiar = (value) => {
        if(value === 'C'){
            setExpresion('')
        }
        else{
            setExpresion(expresion.slice(0,-1))
        }
    }
    // Funcion para calcular el resultado
    const ButtonEqual = () => {
        if(expresion){
            setExpresion(eval(expresion).toString())
        }
    }
    // Funcion para calcular el porcentaje del numero
    const ButtonPorecentaje = () => {
        if(expresion){
            setExpresion((eval(expresion) / 100).toString())
        }
    }

    return(
        <View style={stylesCalculate.ContainerCalculate}>
            <View style={stylesCalculate.ContainerResult}>
                <Text style={stylesCalculate.TextResult}>{expresion}</Text>
            </View>
            <View style={stylesCalculate.ContainerButton}>
                <TouchableHighlight style={stylesCalculate.Button} onPress={() => ButtonLimpiar('C')}>
                    <Text style={stylesCalculate.TextButton_Delete}>C</Text>
                </TouchableHighlight>
                <TouchableHighlight style={stylesCalculate.Button} onPress={() => ButtonLimpiar('CE')}>
                    <Text style={stylesCalculate.TextButton_Delete}>CE</Text>
                </TouchableHighlight>
                <TouchableHighlight style={stylesCalculate.Button} onPress={() => ButtonPorecentaje()}>
                    <Text style={stylesCalculate.TextButton_Operator}>%</Text>
                </TouchableHighlight>
                <TouchableHighlight style={stylesCalculate.Button} onPress={() => ButtonOperator('/')}>
                    <Text style={stylesCalculate.TextButton_Operator}>/</Text>
                </TouchableHighlight>
            </View>
            <View style={stylesCalculate.ContainerButton}>
                <TouchableHighlight style={stylesCalculate.Button} onPress={() => ButtonOperator('7')}>
                    <Text style={stylesCalculate.TextButton}>7</Text>
                </TouchableHighlight>
                <TouchableHighlight style={stylesCalculate.Button} onPress={() => ButtonOperator('8')}>
                    <Text style={stylesCalculate.TextButton}>8</Text>
                </TouchableHighlight>
                <TouchableHighlight style={stylesCalculate.Button} onPress={() => ButtonOperator('9')}>
                    <Text style={stylesCalculate.TextButton}>9</Text>
                </TouchableHighlight>
                <TouchableHighlight style={stylesCalculate.Button} onPress={() => ButtonOperator('*')}>
                    <Text style={stylesCalculate.TextButton_Operator}>*</Text>
                </TouchableHighlight>
            </View>
            <View style={stylesCalculate.ContainerButton}>
                <TouchableHighlight style={stylesCalculate.Button} onPress={() => ButtonOperator('4')}>
                    <Text style={stylesCalculate.TextButton}>4</Text>
                </TouchableHighlight>
                <TouchableHighlight style={stylesCalculate.Button} onPress={() => ButtonOperator('5')}>
                    <Text style={stylesCalculate.TextButton}>5</Text>
                </TouchableHighlight>
                <TouchableHighlight style={stylesCalculate.Button} onPress={() => ButtonOperator('6')}>
                    <Text style={stylesCalculate.TextButton}>6</Text>
                </TouchableHighlight>
                <TouchableHighlight style={stylesCalculate.Button} onPress={() => ButtonOperator('-')}>
                    <Text style={stylesCalculate.TextButton_Operator}>-</Text>
                </TouchableHighlight>
            </View>
            <View style={stylesCalculate.ContainerButton}>
                <TouchableHighlight style={stylesCalculate.Button} onPress={() => ButtonOperator('1')}>
                    <Text style={stylesCalculate.TextButton}>1</Text>
                </TouchableHighlight>
                <TouchableHighlight style={stylesCalculate.Button} onPress={() => ButtonOperator('2')}>
                    <Text style={stylesCalculate.TextButton}>2</Text>
                </TouchableHighlight>
                <TouchableHighlight style={stylesCalculate.Button} onPress={() => ButtonOperator('3')}>
                    <Text style={stylesCalculate.TextButton}>3</Text>
                </TouchableHighlight>
                <TouchableHighlight style={stylesCalculate.Button} onPress={() => ButtonOperator('+')}>
                    <Text style={stylesCalculate.TextButton_Operator}>+</Text>
                </TouchableHighlight>
            </View>
            <View style={stylesCalculate.ContainerButton_Equal}>
                <TouchableHighlight style={stylesCalculate.Button} onPress={() => ButtonOperator('0')}>
                    <Text style={stylesCalculate.TextButton}>0</Text>
                </TouchableHighlight>
                <TouchableHighlight style={stylesCalculate.Button} onPress={() => ButtonOperator('00')}>
                    <Text style={stylesCalculate.TextButton}>00</Text>
                </TouchableHighlight>
                <TouchableHighlight style={stylesCalculate.Button} onPress={() => ButtonOperator('.')}>
                    <Text style={stylesCalculate.TextButton}>.</Text>
                </TouchableHighlight>
                <TouchableHighlight style={stylesCalculate.Button_Equal} onPress={() => ButtonEqual()}>
                    <Text style={stylesCalculate.TextButton_Equal}>=</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}