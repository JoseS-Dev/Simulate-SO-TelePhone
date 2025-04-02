import {View, Text, Image} from 'react-native';
import { StylesNotes } from '../../Css/Notes';

export function StructureNotes(){
    return(
        <View style={StylesNotes.ContentNotes}>
            <View style={StylesNotes.ContainerContent}>
                <Text style={StylesNotes.textContent}>Nota</Text>
                <Text style={StylesNotes.textNotes} numberOfLines={1}>Mensaje</Text>
            </View>
            <Pressable style={StylesNotes.PressableContent}>
                <Image style={StylesNotes.PressableContentImage} source={require('../../assets/Delete.png')} />
            </Pressable>
        </View>
    )
}