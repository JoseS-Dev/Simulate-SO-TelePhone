import {View, Text } from 'react-native';
import { useGlobalSearchParams } from 'expo-router';

export function StructureInfoGmail(){
    const{id, Name, Date, Content, Email} = useGlobalSearchParams()
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>ID: {id}</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Name: {Name}</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Date: {Date}</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Content: {Content}</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Email: {Email}</Text>
        </View>
    )
}