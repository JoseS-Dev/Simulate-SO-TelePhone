import {View, Text, Image, Pressable} from 'react-native';
import { Link } from 'expo-router';
import { StylesCall } from '../../Css/Call';

export function StructureContacts({contacts, deleteContact}){
    return(
        <View key={contacts.id} style={StylesCall.ContentCall}>
            <View style={StylesCall.ContainerContacts}>
                <Text style={StylesCall.TextName}>{contacts.name}</Text>
                <Text style={StylesCall.TextCall}>{contacts.phone}</Text>
            </View>
            <View style={StylesCall.ContainerPressable}> 
                <Link href={{pathname: '/CallPhone',params:{name: contacts.name, Phone: contacts.phone}}} asChild>
                    <Pressable style={StylesCall.PressableContact}>
                        <Image source={require('../../assets/Phone/Phone.png')} style={StylesCall.ImageCall}/>
                    </Pressable>
                </Link>
                <Pressable style={StylesCall.PressableContact} onPress={() => deleteContact(contacts.id)}>
                    <Image source={require('../../assets/Delete.png')} style={StylesCall.ImageCall}/>
                </Pressable>
            </View>
        </View>
    )
}