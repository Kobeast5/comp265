import { StatusBar, StyleSheet, Text, View } from "react-native";

const DiscoverScreen = () => {
    return (
        <View style={styles.screen} >
            <StatusBar barStyle="light-content" />
            <Text>Discover Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
})

export default DiscoverScreen;