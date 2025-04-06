import { View, Text, Image, Pressable, FlatList } from "react-native";
import { StylesGmail} from "../../Css/Gmail";
import { Link } from "expo-router";

export function ContentGmail(){
    return(
        <View style={StylesGmail.ContainerGmail}>
            <View style={StylesGmail.ContainerMain}>
                <View style={StylesGmail.ContainerHeader}>
                    <Text style={StylesGmail.textTitle}>Gmail</Text>
                    <Image style={StylesGmail.ImageHeader} source={require('../../assets/Gmail/Gmail.png')}/>
                </View>
                <View style={StylesGmail.ContainerNav}>
                    <Link href='/' asChild>
                        <Pressable style={StylesGmail.PressableGmail}>
                            <Text style={StylesGmail.PressabbleGmailText}>Favoritos</Text>
                        </Pressable>
                    </Link>
                    <Link href='/Gmail' asChild>
                        <Pressable style={StylesGmail.PressableGmail}>
                            <Text style={[StylesGmail.PressabbleGmailText, StylesGmail.textDecoration]}>Principal</Text>
                        </Pressable>
                    </Link>
                    <Link href='/Recent' asChild>
                        <Pressable style={StylesGmail.PressableGmail}>
                            <Text style={StylesGmail.PressabbleGmailText}>Recientes</Text>
                        </Pressable>
                    </Link>
                </View>
            </View>
        </View>
    )
}