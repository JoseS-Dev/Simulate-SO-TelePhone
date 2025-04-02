import {View, Text, Image, Pressable, Modal,  TextInput, TouchableHighlight} from 'react-native';
import { StylesNotes } from '../../Css/Notes';
import { useState } from 'react';

export function ContentNotes(){
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View style={StylesNotes.Container}>
            <View style={StylesNotes.ContainerMain}>
                <View style={StylesNotes.ContainerHeader}>
                    <Text style={StylesNotes.textHeader}>Notas</Text>
                    <Image style={StylesNotes.ImageHeader} source={require('../../assets/Notes/Notes.png')}/>
                </View>
                <View style={StylesNotes.ContainerNav}>
                    <Text style={StylesNotes.textNav}>Lista de Notas</Text>
                    <Pressable style={StylesNotes.PressableNav} onPress={() => setModalVisible(true)}>
                        <Image style={StylesNotes.ImageHeader} source={require('../../assets/Notes/Add.png')}/>
                    </Pressable>
                </View>
            </View>
            <Modal 
                visible={modalVisible}
                transparent={true}
                animationType='slide'    
            >
                <View style={StylesNotes.Modal}>
                    <View style={StylesNotes.ModalContainer}>
                        <Text style={StylesNotes.ModalTitle}>Crear Nota</Text>
                        <View style={StylesNotes.ModalContent}>
                            <Text style={StylesNotes.TextInput}>Nombre de la nota</Text>
                            <TextInput
                                placeholder='Nota'
                                placeholderTextColor={'#fff'}
                                style={StylesNotes.InputText}
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
                            />
                        </View>
                        <TouchableHighlight style={StylesNotes.ModalButton} onPress={() => setModalVisible(false)}>
                            <Text style={StylesNotes.textNotes}>Agregar Nota</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </View>
    )
}