import {View, Text, Image, TouchableHighlight} from 'react-native';
import { useState, useEffect } from 'react';
import { Link } from 'expo-router';
import { StylesCall } from '../Css/Call';
export function KeyBoardCall() {
    const[PhoneNumber, setNumber] = useState('');
    
    const handleKeyPress = (key) => {
        setNumber((prev) => prev + key);
    }
    const buttonLimipar = () => {
        setNumber(PhoneNumber.slice(0, -1));
    }
    
    return (
        <View style={StylesCall.ContainerCall}>
            <View style={StylesCall.ContainerMain}>
                <View style={StylesCall.ContainerCallHeader}> 
                    <Text style={StylesCall.TextTitle}>Llamadas</Text>
                    <Image source={require('../assets/Phone/Phone.png')} style={StylesCall.ImageHeader}/>
                </View>
                <View style={StylesCall.ContainerNavCall}>
                    <Text style={[StylesCall.TextCall, StylesCall.Link]}>Teclado</Text>
                    <Link href='/Call' style={StylesCall.TextCall}>Recientes</Link>
                    <Link href='/Contacts' style={StylesCall.TextCall}>Contactos</Link>
                </View>
                <View style={StylesCall.ContainerKey}>
                    <View style={StylesCall.ContainerResult}>
                        <Text style={StylesCall.TextResult}>{PhoneNumber}</Text>
                    </View>
                    <View style={StylesCall.ContainerRow}>
                        <TouchableHighlight style={StylesCall.ContainerKeyNumber} onPress={() => handleKeyPress('1')}>
                            <Text style={StylesCall.TextKey}>1</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={StylesCall.ContainerKeyNumber} onPress={() => handleKeyPress('2')}>
                            <Text style={StylesCall.TextKey}>2</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={StylesCall.ContainerKeyNumber} onPress={() => handleKeyPress('3')}>
                            <Text style={StylesCall.TextKey}>3</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={StylesCall.ContainerRow}>
                        <TouchableHighlight style={StylesCall.ContainerKeyNumber} onPress={() => handleKeyPress('4')}>
                            <Text style={StylesCall.TextKey}>4</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={StylesCall.ContainerKeyNumber} onPress={() => handleKeyPress('5')}>
                            <Text style={StylesCall.TextKey}>5</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={StylesCall.ContainerKeyNumber} onPress={() => handleKeyPress('6')}>
                            <Text style={StylesCall.TextKey}>6</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={StylesCall.ContainerRow}>
                        <TouchableHighlight style={StylesCall.ContainerKeyNumber} onPress={() => handleKeyPress('7')}>
                            <Text style={StylesCall.TextKey}>7</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={StylesCall.ContainerKeyNumber} onPress={() => handleKeyPress('8')}>
                            <Text style={StylesCall.TextKey}>8</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={StylesCall.ContainerKeyNumber} onPress={() => handleKeyPress('9')}>
                            <Text style={StylesCall.TextKey}>9</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={StylesCall.ContainerRow}>
                        <TouchableHighlight style={StylesCall.ContainerKeyNumber} onPress={() => handleKeyPress('*')}>
                            <Text style={StylesCall.TextKey}>*</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={StylesCall.ContainerKeyNumber} onPress={() => handleKeyPress('0')}>
                            <Text style={StylesCall.TextKey}>0</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={StylesCall.ContainerKeyNumber} onPress={() => handleKeyPress('#')}>
                            <Text style={StylesCall.TextKey}>#</Text>
                        </TouchableHighlight>
                    </View>
                    {PhoneNumber.length === 0 ? (
                        <View style={StylesCall.ContainerKeyCall}>
                            <TouchableHighlight style={StylesCall.container_1} onPress={() => buttonLimipar()}>
                                <Image source={require('../assets/Phone/Phone.png')} style={StylesCall.ImageCall}/>
                            </TouchableHighlight>
                        </View>
                    ):(
                        <View style={StylesCall.ContainerKeyCall}>
                            <Link href={{pathname:'/CallPhone', params: {Phone: PhoneNumber}}} asChild>
                                <TouchableHighlight style={StylesCall.container_1}>
                                    <Image source={require('../assets/Phone/Phone.png')} style={StylesCall.ImageCall}/>
                                </TouchableHighlight>
                            </Link>
                            <TouchableHighlight style={StylesCall.container_1} onPress={() => buttonLimipar()}>
                                <Image source={require('../assets/Phone/DeleteCall.png')} style={StylesCall.ImageCall}/>
                            </TouchableHighlight>
                        </View>
                    )}
                </View>
            </View>
        
        </View>
    );
}