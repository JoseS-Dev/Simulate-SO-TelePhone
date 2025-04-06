import {View, FlatList, Text} from 'react-native';
import { BarraTitleGmail } from './BarraTitleGmail';
import { BarraNavGmail } from './BarraNavGmail';
import { StylesGmail } from '../Css/Gmail';
import { StructureGmailFavorite } from './Content/StructureGmailFavorite';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function FavoriteGmail(){
    const [Gmail, setGmail] = useState([]);
    // Funcion que obtiene todas los gmails favoritos
    const GmailStroage = async() =>{
        try{
            const StorageGmail = await AsyncStorage.getItem('FavoritesGmail');
            if(StorageGmail){
                setGmail(JSON.parse(StorageGmail));
            }
        }catch(err){
            console.log(`Hubo un error ${err}`)
        }
    }
    useEffect(() => {
        GmailStroage();
    },[]);

    const deleteEmail = async (id) => {
        const deleteGmail = Gmail.filter((email) => email.id !== id);
        setGmail(deleteGmail);
        try{
            await AsyncStorage.setItem('FavoritesGmail', JSON.stringify(deleteGmail));
            console.log('Correo eliminado de favoritos');
        }
        catch(err){
            console.log(`Hubo un error ${err}`)
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
                        renderItem={({item}) => <StructureGmailFavorite Email={item} deleteEmail={deleteEmail}/>}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                ) : (
                    <View style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                        <Text style={{fontSize: 20, fontWeight: '500', color: '#eee'}}>No hay correos favoritos</Text>
                    </View>
                )}
            </View>
        </View>
    )
}