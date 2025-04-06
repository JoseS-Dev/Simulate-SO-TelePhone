import {Link} from 'expo-router';
import { Pressable, Image, View } from 'react-native';
import { stylesNav } from '../Css/BarraNav';

export function BarraNav(){
    return (
            <View style={stylesNav.Container}>
                <Link href='/Call' asChild>
                    <Pressable style={stylesNav.BarraNav}>
                        <Image source={require('../assets/Phone/Phone.png')} style={stylesNav.ImageNav}/>
                    </Pressable>
                </Link>
                <Link href='/' asChild>
                    <Pressable style={stylesNav.BarraNav}>
                        <Image source={require('../assets/Home.png')} style={stylesNav.ImageNav}/>
                    </Pressable>
                </Link>
                <Link href='/Settings' asChild>
                    <Pressable style={stylesNav.BarraNav}>
                        <Image source={require('../assets/Settings/Cof.png')} style={stylesNav.ImageNav}/>
                    </Pressable>
                </Link>
            </View>
    )
}