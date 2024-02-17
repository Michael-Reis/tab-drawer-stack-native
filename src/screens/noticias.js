import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

export const NoticiasScreen = () => {

    const navigate = useNavigation();


    return (
        <View style={styles.container}>
            <Text>Página Noticias</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

})