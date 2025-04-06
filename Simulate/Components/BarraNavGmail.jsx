import {View, Text, Pressable} from 'react-native';
import { StylesGmail } from '../Css/Gmail';
import { Link } from 'expo-router';
import { useState } from 'react';

export function BarraNavGmail(){
    const[isSelected, setSelected] = useState('');
    const handlePress = (link) =>{
        setSelected(link)
    }
    return(
        <View style={StylesGmail.ContainerNav}>
            <Link href='/FavoritesGmail' asChild>
                <Pressable style={StylesGmail.PressableGmail} onPress={() => handlePress('Favorites')}>
                    <Text style={[isSelected === 'Favorites' ? StylesGmail.textDecoration : StylesGmail.PressabbleGmailText]}>Favoritos</Text>
                </Pressable>
            </Link>
            <Link href='/Gmail' asChild>
                <Pressable style={StylesGmail.PressableGmail} onPress={() => handlePress('Gmail')}>
                    <Text style={[,isSelected === 'Gmail' ? StylesGmail.textDecoration : StylesGmail.PressabbleGmailText]}>Principal</Text>
                </Pressable>
            </Link>
            <Link href='/RecentGmail' asChild>
                <Pressable style={StylesGmail.PressableGmail} onPress={() => handlePress('Recent')}>
                    <Text style={isSelected === 'Recent' ? StylesGmail.textDecoration : StylesGmail.PressabbleGmailText}>Recientes</Text>
                </Pressable>
            </Link>
        </View>
    )
}