import { View, Text } from 'react-native';
import { useGlobalSearchParams } from 'expo-router';

export function FormMessage(){
    const { id, name, phone, messages } = useGlobalSearchParams();
    return(
        <View key={id}>
            <View>
                <Text style={{borderColor: '#fff', borderWidth: 1, color: '#eee'}}>{name}</Text>
                <Text>{phone}</Text>
            </View>
            <View>
                <Text>{messages}</Text>
            </View>
        </View>
    )
}