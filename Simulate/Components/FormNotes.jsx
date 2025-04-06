import {View, Text, Pressable, Image} from 'react-native';
import {Link} from 'expo-router';
import { StylesFormNotes } from '../Css/Notes';
import { useGlobalSearchParams } from 'expo-router';

export function FormNotes(){
    const{title, Content} = useGlobalSearchParams();
    return(
        <View style={StylesFormNotes.container}>
            <View style={StylesFormNotes.ContainerHeader}>
                <Link href='/Notes' asChild>
                    <Pressable style={StylesFormNotes.PressableNav}>
                        <Image source={require('../assets/Back.png')} style={StylesFormNotes.ImageHeader}/>
                    </Pressable>
                </Link>
                <View style={StylesFormNotes.ContainerTitle}>
                    <Text style={StylesFormNotes.textTitle}>{title}</Text>
                </View>
            </View>
            <View style={StylesFormNotes.ContainerMain}>
                <Text style={StylesFormNotes.textContent}>{Content}</Text>
            </View>
        </View>
    )
}