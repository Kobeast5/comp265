import { Link } from "expo-router";
import React from 'react';
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
    return (
        <View style={styles.screen}>

            <Text style={styles.welcomeMessage}>Welcome Back!</Text>
            {/* Navigate to Details screen inside the same tab */}
            <Link href="/notes/details" style={styles.moreInfo}>More Information</Link>

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },

    welcomeMessage: {
        fontSize: 28,
        fontWeight: 600,
        marginBottom: 8,
    },

    moreInfo: {
        backgroundColor: '#73A3D3',
        fontSize: 18,
        fontWeight: 500,
        padding: 6,
        borderRadius: 100,
        borderColor: '#000',
        borderWidth: 1,
    },
})

export default HomeScreen;