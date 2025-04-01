import {View, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import { StylesCall } from '../../Css/Call';
import { useState, useEffect } from 'react';
import { StructureCallBody } from './StructureCall';
import { getCall } from '../../Js/UserCall';


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
                <Text style={StylesCall.TextCall}>Teclado</Text>
                <Text style={[StylesCall.TextCall, StylesCall.Link]}>Recientes</Text>
                <Text style={StylesCall.TextCall}>Contactos</Text>
            </View>
            <FlatList 
                keyExtractor={(item) => item.id}
                data={ListCell}
                renderItem={({item}) => <StructureCallBody Call={item}/>}
                showsVerticalScrollIndicator={false}
            />
            </View>
        </View>
    )
}