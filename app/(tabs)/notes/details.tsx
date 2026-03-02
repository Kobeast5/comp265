import React from 'react';
import { StyleSheet, Text, View } from "react-native";

const DetailsScreen = () => {
    return (
        <View style={styles.screen}>

            <Text style={styles.header}>Test Application</Text>
            <Text style={styles.body}>This app is meant for testing layouts using "expo-router".
                I hope your experience with this app is smooth!</Text>

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

    header: {
        fontSize: 28,
        fontWeight: 600,
        marginBottom: 4,
    },

    body: {
        fontSize: 16,
        textAlign: 'center',
        margin: 16
    },
})

export default DetailsScreen;