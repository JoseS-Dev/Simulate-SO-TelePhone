import { View, Text, Image, Pressable, FlatList } from "react-native";
import { StylesGmail} from "../../Css/Gmail";
import { Link } from "expo-router";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getGmailMessage } from "../../Js/UserGmail";
import { StructureGmail } from "./StructureGmail";

export function ContentGmail(){
    const[Gmail,setGmail] = useState([]);

    useEffect(() => {
        getGmailMessage().then((data) => {
            setGmail(data);
        })
    }, []);
    console.log(Gmail);

    // Funcion para eliminar una correo
    const deleteEmail = (id) => {
        const deleteGmail = Gmail.filter((email) => email.id !== id);
        setGmail(deleteGmail);
    }

    // Funcion para agregar un correo a favoritos
    const FavoritesGmail = async (id) => {
        const EmailIndex = Gmail.findIndex((email) => email.id === id);
        if(EmailIndex !== -1){
            const Email = Gmail[EmailIndex];
            const Favorite = {
                id: Email.id,
                Name: Email.Name,
                Date: Email.Date,
                Content: Email.Content,
                Email: Email.Email
            }
            try{
                const storageEmail = await AsyncStorage.getItem('FavoritesGmail');
                const FavoritesGmail = []
                if(storageEmail){
                    FavoritesGmail = JSON.parse(storageEmail);
                }
                const isFavorite = FavoritesGmail.some(fav => fav.id === Favorite.id)
                if(!isFavorite){
                    await AsyncStorage.setItem('FavoritesGmail', JSON.stringify(FavoritesGmail));
                    console.log('Correo agregado a favoritos');
                }
            }catch(err){
                console.log("No se pudo agregar a favoritos por un error" + err);
            }
        }
    }
    
    return(
        <View style={StylesGmail.ContainerGmail}>
            <View style={StylesGmail.ContainerMain}>
                <View style={StylesGmail.ContainerHeader}>
                    <Text style={StylesGmail.textTitle}>Gmail</Text>
                    <Image style={StylesGmail.ImageHeader} source={require('../../assets/Gmail/Gmail.png')}/>
                </View>
                <View style={StylesGmail.ContainerNav}>
                    <Link href='/' asChild>
                        <Pressable style={StylesGmail.PressableGmail}>
                            <Text style={StylesGmail.PressabbleGmailText}>Favoritos</Text>
                        </Pressable>
                    </Link>
                    <Link href='/Gmail' asChild>
                        <Pressable style={StylesGmail.PressableGmail}>
                            <Text style={[StylesGmail.PressabbleGmailText, StylesGmail.textDecoration]}>Principal</Text>
                        </Pressable>
                    </Link>
                    <Link href='/Recent' asChild>
                        <Pressable style={StylesGmail.PressableGmail}>
                            <Text style={StylesGmail.PressabbleGmailText}>Recientes</Text>
                        </Pressable>
                    </Link>
                </View>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={Gmail}
                    renderItem={({ item }) => (
                        <StructureGmail Email={item} deleteEmail={deleteEmail} FavoritesEmail={FavoritesGmail}/> 
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}