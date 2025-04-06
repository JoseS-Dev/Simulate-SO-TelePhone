import { View,FlatList } from "react-native";
import { StylesGmail} from "../../Css/Gmail";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getGmailMessage } from "../../Js/UserGmail";
import { StructureGmail } from "./StructureGmail";
import { BarraTitleGmail } from "../BarraTitleGmail";
import { BarraNavGmail } from "../BarraNavGmail";

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
                let FavoritesGmail = []
                if(storageEmail){
                    FavoritesGmail = JSON.parse(storageEmail);
                }
                const isFavorite = FavoritesGmail.some(fav => fav.id === Favorite.id)
                if(!isFavorite){
                    FavoritesGmail.push(Favorite);
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
                <BarraTitleGmail/>
                <BarraNavGmail/>
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