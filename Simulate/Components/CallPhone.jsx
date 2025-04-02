import {View, Text, Image, Pressable} from 'react-native';
import { Link } from 'expo-router';
import { useGlobalSearchParams } from 'expo-router';

export function CallPhone(){
    const { name, Phone } = useGlobalSearchParams();
    return(
        <View>
            <View>
                <Text>{name}</Text>
                <Text>{Phone}</Text>
            </View>
            <View>
                <View>
                    <View>
                        <Image/>
                        <Text>Altavoz</Text>
                    </View>
                    <View>
                        <Image/>
                        <Text>Silencio</Text>
                    </View>
                    <View>
                        <Image/>
                        <Text>Teclado</Text>
                    </View>
                    <View>
                        <Link href='/Call' asChild>
                            <Pressable>
                                <Image/>  
                            </Pressable>      
                        </Link>
                    </View>
                </View>
            </View>
        </View>
    )
}