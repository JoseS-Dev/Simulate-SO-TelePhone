import {View, Text, Image, Pressable} from 'react-native';
import { Link } from 'expo-router';
import { StylesNotes } from '../../Css/Notes';

export function StructureNotes({Notes, deleteNotes}){
    return(
        <Link href={{pathname: '/MessageNotes', params: {title: Notes.title, Content: Notes.content}}} style={StylesNotes.ContentNotes} key={Notes.id}>
            <View style={StylesNotes.ContainerContent}>
                <Text style={StylesNotes.textContent}>{Notes.title}</Text>
                <Text style={StylesNotes.textNotes} numberOfLines={1}>{Notes.content}</Text>
            </View>
            <Pressable style={StylesNotes.PressableContent} onPress={() => deleteNotes(Notes.id)}>
                <Image style={StylesNotes.PressableContentImage} source={require('../../assets/Delete.png')} />
            </Pressable>
        </Link>
    )
}