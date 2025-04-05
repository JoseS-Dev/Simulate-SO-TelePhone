import { View, Text, Image, Pressable, Modal, TextInput, TouchableHighlight, KeyboardAvoidingView, Platform, FlatList} from 'react-native';
import { StylesNotes } from '../../Css/Notes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { StructureNotes } from './StructureNotes';

export function ContentNotes() {
    const [modalVisible, setModalVisible] = useState(false);
    const [notes,setNotes] = useState([]);
    const[notesTitle, setNotesTitle] = useState('');
    const[notesContent, setNotesContent] = useState('');

    useEffect(() => {
        const GetNotes = async () => {
            try {
                const StoreNotes = await AsyncStorage.getItem('Notes');
                if(StoreNotes !== null){
                    setNotes(JSON.parse(StoreNotes));
                }
            }catch(e){
                console.log(e);
            }
            
        }
        GetNotes();
    }, [])
    // Funcion para guardar la nota
    const SavesNotes = async () => {
        if(notesTitle && notesContent){
            const newNote = {
                id: Date.now().toString(),
                title: notesTitle,
                content: notesContent
            };
            const ListNotes = [...notes, newNote]
            console.log(ListNotes);
            
            try{
                await AsyncStorage.setItem('Notes', JSON.stringify(ListNotes));
                setNotes(ListNotes);
                setModalVisible(false);
                setNotesTitle('');
                setNotesContent('');
            }
            catch(e){
                console.log(`Hubo un error ${e}`);
            }
        }
    }
    // Funcion para eliminar la nota
    const deleteNotes = async (id) => {
        const ListNotes = notes.filter((item) => item.id !== id);
        try{
            await AsyncStorage.setItem('Notes', JSON.stringify(ListNotes));
            setNotes(ListNotes);
        }catch(e){
            console.log(`Hubo un error ${e}`);
        }
        
    }
    return (
        <View style={StylesNotes.Container}>
            <View style={StylesNotes.ContainerMain}>
                <View style={StylesNotes.ContainerHeader}>
                    <Text style={StylesNotes.textHeader}>Notas</Text>
                    <Image style={StylesNotes.ImageHeader} source={require('../../assets/Notes/Notes.png')} />
                </View>
                <View style={StylesNotes.ContainerNav}>
                    <Text style={StylesNotes.textNav}>Lista de Notas</Text>
                    <Pressable style={StylesNotes.PressableNav} onPress={() => setModalVisible(true)}>
                        <Image style={StylesNotes.ImageHeader} source={require('../../assets/Notes/Add.png')} />
                    </Pressable>
                </View>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={notes}
                    renderItem={({ item }) => (
                        <StructureNotes Notes={item} deleteNotes={deleteNotes}/>
                    )}
                />
            </View>
            <Modal 
                visible={modalVisible}
                transparent={true}
                animationType='slide'    
            >
                <KeyboardAvoidingView
                    style={StylesNotes.Modal}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <View style={StylesNotes.ModalContainer}>
                        <Text style={StylesNotes.ModalTitle}>Crear Nota</Text>
                        <View style={StylesNotes.ModalContent}>
                            <Text style={StylesNotes.TextInput}>Nombre de la nota</Text>
                            <TextInput
                                placeholder='Nota'
                                placeholderTextColor={'#fff'}
                                style={StylesNotes.InputText}
                                value={notesTitle}
                                onChangeText={(text) => setNotesTitle(text)}
                            />
                        </View>
                        <View style={StylesNotes.ModalContent_2}>
                            <Text style={StylesNotes.TextInput}>Contenido de la nota</Text>
                            <TextInput
                                placeholder='Contenido'
                                placeholderTextColor={'#fff'}
                                style={StylesNotes.TextArea}
                                multiline={true}
                                numberOfLines={4}
                                value={notesContent}
                                onChangeText={(text) => setNotesContent(text)}
                            />
                        </View>
                        <TouchableHighlight style={StylesNotes.ModalButton} onPress={() => SavesNotes()}>
                            <Text style={StylesNotes.textNotes}>Agregar Nota</Text>
                        </TouchableHighlight>
                    </View>
                </KeyboardAvoidingView>
            </Modal>
        </View>
    );
}