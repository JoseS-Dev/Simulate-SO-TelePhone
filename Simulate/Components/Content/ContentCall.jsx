import {View, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import { StylesCall } from '../../Css/Call';
import { useState, useEffect } from 'react';
import { StructureCallBody } from './StructureCall';
import { getCall } from '../../Js/UserCall';
import { Link } from 'expo-router'


export function ContentCall(){
    const [ListCell, setListCell] = useState([]);

    useEffect(() => {
        getCall().then((data) => {
            setListCell(data);
        }).catch((err) => {
            console.log(`Hubo un error al cargar los datos: ${err}`);
        })
    }, [])
    console.log(ListCell)
    
    return(
        <View style={StylesCall.ContainerCall}>
            <View style={StylesCall.ContainerMain}>
            <View style={StylesCall.ContainerCallHeader}> 
                <Text style={StylesCall.TextTitle}>Llamadas</Text>
                <Image source={require('../../assets/Phone/Phone.png')} style={StylesCall.ImageHeader}/>
            </View>
            <View style={StylesCall.ContainerNavCall}>
                <Link href='/KeyBoardCall' style={StylesCall.TextCall}>Teclado</Link>
                <Text style={[StylesCall.TextCall, StylesCall.Link]}>Recientes</Text>
                <Link href='/Contacts' style={StylesCall.TextCall}>Contactos</Link>
            </View>
             {ListCell.length === 0 ? (
                <View style={StylesCall.ContainerLoading}>
                    <ActivityIndicator size="large" color="#eee" />
                    <Text style={StylesCall.TextName}>Cargando...</Text>
                </View>
             ) : (
                <FlatList 
                    keyExtractor={(item) => item.id}
                    data={ListCell}
                    renderItem={({item}) => <StructureCallBody Call={item}/>}
                    showsVerticalScrollIndicator={false}
                />
             )}
            </View>
        </View>
    )
}