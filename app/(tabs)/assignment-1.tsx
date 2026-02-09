import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ArtworkApp = () => {
    return (

        <View style={styles.container}>

            <Text style={styles.title}>This is some text.</Text>

        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default ArtworkApp;