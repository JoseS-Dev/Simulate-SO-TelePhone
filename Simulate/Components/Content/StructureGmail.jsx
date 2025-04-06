import {View, Text, Image, Pressable} from 'react-native';
import { StylesStructureGmail } from '../../Css/Gmail';
import { Link } from 'expo-router';
import { useState } from 'react';

export function StructureGmail({Email, deleteEmail, FavoritesEmail}){
    const[isFavorite, setFavorite] = useState(false);
    const handlePress = () => {
        FavoritesEmail(Email.id)
        setFavorite(!isFavorite)
    }
    return(
        <Link href={{pathname: '/InfoGmail', params: {id: Email.id, Name: Email.Nmae, Date: Email.Date, Content: Email.Content, Email: Email.Email}}} asChild>
            <Pressable style={StylesStructureGmail.ContentGmail} key={Email.id}>
                <View style={StylesStructureGmail.ContainerContentGmail}>
                    <View style={StylesStructureGmail.AsuntGmail}>
                        <Text style={StylesStructureGmail.textTitle}>{Email.Name}</Text>
                        <Text style={StylesStructureGmail.textFecha}>{Email.Date}</Text>
                    </View>
                    <View style={StylesStructureGmail.ContainerTextContent}>
                        <Text style={StylesStructureGmail.textContent} numberOfLines={1}>{Email.Content}</Text>
                    </View>
                </View>
                <Pressable style={StylesStructureGmail.PressableGmail} onPress={() => handlePress()}>
                    <Image style={StylesStructureGmail.Image} source={isFavorite
                        ? require('../../assets/Favorites.png')
                        : require('../../assets/Star.png')
                    }/>
                </Pressable>
                <Pressable style={StylesStructureGmail.PressableGmail} onPress={() => deleteEmail(Email.id)}>
                    <Image style={StylesStructureGmail.Image} source={require('../../assets/Delete.png')}/>
                </Pressable>
            </Pressable>
        </Link>
    )
}