import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
export const HomeScreen = () => {
    const navigate = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Página Compras</Text>
            <Button title="Detalhes de uma compra" color='#490397'
                onPress={() => navigate.navigate('CompraDetail')} />

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