import { View, Text, StyleSheet } from "react-native";
export const PerfilScreen = () => {


    return (
        <View style={styles.container}>
            <Text>Página de Perfil</Text>
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