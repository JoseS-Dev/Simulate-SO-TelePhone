import {View, Text, Image, Pressable} from 'react-native';
import { StylesCall } from '../../Css/Call';

export function StructureContacts({contacts, deleteContact}){
    return(
        <View key={contacts.id} style={StylesCall.ContentCall}>
            <View style={StylesCall.ContainerContacts}>
                <Text style={StylesCall.TextName}>{contacts.name}</Text>
                <Text style={StylesCall.TextCall}>{contacts.phone}</Text>
            </View>
            <View style={StylesCall.ContainerPressable}> 
                <Pressable style={StylesCall.PressableContact}>
                    <Image source={require('../../assets/Phone/Phone.png')} style={StylesCall.ImageCall}/>
                </Pressable>
                <Pressable style={StylesCall.PressableContact} onPress={() => deleteContact(contacts.id)}>
                    <Image source={require('../../assets/Delete.png')} style={StylesCall.ImageCall}/>
                </Pressable>
            </View>
        </View>
    )
}