import {View, Text, FlatList} from 'react-native';
import { BarraTitleGmail } from './BarraTitleGmail';
import { BarraNavGmail } from './BarraNavGmail';
import { StructureGmail } from './Content/StructureGmail';
import { useEffect, useState } from 'react';
import { getGmailMessage } from '../Js/UserGmail';
import { StylesGmail } from '../Css/Gmail';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function RecentGmail(){
    const[Gmail, setGmail] = useState([]);
    
    useEffect(() => {
        getGmailMessage().then((data) => {
            setGmail(data);
        })
    },[]);

    // Funcion para eliminar un correo
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
                    {Gmail.length > 0 ? (
                        <FlatList
                            data={Gmail}
                            renderItem={({item}) => <StructureGmail Email={item} deleteEmail={deleteEmail} FavoritesEmail={FavoritesGmail}/>}
                            keyExtractor={(item) => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                        />
                    ) : (
                        <View style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                            <Text style={{fontSize: 20, fontWeight: '500', color: '#eee'}}>No hay Correos Recientes</Text>
                        </View>
                    )}
                </View>
            </View>
        )
}