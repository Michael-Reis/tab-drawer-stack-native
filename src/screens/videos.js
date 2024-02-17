import { View, Text, StyleSheet } from "react-native";
export const VideosScreen = () => {


    return (
        <View style={styles.container}>
            <Text>Página de Videos</Text>
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