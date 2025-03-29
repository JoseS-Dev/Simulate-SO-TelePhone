import {View, Text} from 'react-native';
import { StylesNotes } from '../Css/Notes';

export function ContentNotes(){
    return(
        <View style={StylesNotes.ContainerNotes}>
            <Text style={StylesNotes.TextNotes}>Notas</Text>
        </View>
    )
}