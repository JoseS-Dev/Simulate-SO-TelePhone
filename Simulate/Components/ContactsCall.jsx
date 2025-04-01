import {View, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import { Link } from 'expo-router';
import { getCall } from '../Js/UserCall';
import { StylesCall } from '../Css/Call';
import { StructureContacts } from './Content/StructureContacts';
import { useState, useEffect } from 'react';

export function ContactsCall(){
    const[Contacts, setContacts] = useState([]);

    useEffect(() => {
        getCall().then((data) => {
            setContacts(data);
        })
        .catch((error) => {
            console.error('Error fetching call data:', error);
        });
    }, []);

    // Funcion para eliminar un contacto
    const deleteContact = (id) => {
        if(id){
            const updatedContacts = Contacts.filter(contact => contact.id !== id);
            setContacts(updatedContacts);
        }
    }
    return (
        <View style={StylesCall.ContainerCall}>
            <View style={StylesCall.ContainerMain}>
                <View style={StylesCall.ContainerCallHeader}> 
                    <Text style={StylesCall.TextTitle}>Llamadas</Text>
                    <Image source={require('../assets/Phone/Phone.png')} style={StylesCall.ImageHeader}/>
                </View>
                <View style={StylesCall.ContainerNavCall}>
                    <Link href='/KeyBoardCall' style={StylesCall.TextCall}>Teclado</Link>
                    <Link href='/Call' style={StylesCall.TextCall}>Recientes</Link>
                    <Text style={[StylesCall.TextCall, StylesCall.Link]}>Contactos</Text>
                </View>
                {Contacts.length > 0 ? (
                    <FlatList
                        data={Contacts}
                        renderItem={({item}) => (
                            <StructureContacts contacts={item} deleteContact={deleteContact}/>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                ) : Contacts.length === 0 ? (
                    <View style={StylesCall.ContainerLoading}>
                        <Text style={StylesCall.TextName}>No hay contactos</Text>
                    </View>
                ) : (
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator size="large" color="#fff" />
                    </View>
                )} 
                
            </View>
        </View>
    );
}