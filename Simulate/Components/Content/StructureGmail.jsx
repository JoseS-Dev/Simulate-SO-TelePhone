import {View, Text, Image, Pressable} from 'react-native';
import { StylesStructureGmail } from '../../Css/Gmail';
import { Link } from 'expo-router';

export function StructureGmail({Email, deleteEmail, FavoritesEmail}){
    return(
        <Link href='/InfoGmail' asChild>
            <View style={StylesStructureGmail.ContentGmail} key={Email.id}>
                <View style={StylesStructureGmail.ContainerContentGmail}>
                    <View style={StylesStructureGmail.AsuntGmail}>
                        <Text style={StylesStructureGmail.textTitle}>{Email.Name}</Text>
                        <Text style={StylesStructureGmail.textFecha}>{Email.Date}</Text>
                    </View>
                    <View style={StylesStructureGmail.ContainerTextContent}>
                        <Text style={StylesStructureGmail.textContent} numberOfLines={1}>{Email.Content}</Text>
                    </View>
                </View>
                <Pressable style={StylesStructureGmail.PressableGmail} onPress={() => FavoritesEmail(Email.id)}>
                    <Image style={StylesStructureGmail.Image} source={require('../../assets/Star.png')}/>
                </Pressable>
                <Pressable style={StylesStructureGmail.PressableGmail} onPress={() => deleteEmail(Email.id)}>
                    <Image style={StylesStructureGmail.Image} source={require('../../assets/Delete.png')}/>
                </Pressable>
            </View>
        </Link>
    )
}