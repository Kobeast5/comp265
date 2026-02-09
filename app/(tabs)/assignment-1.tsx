import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ArtworkApp = () => {
    return (

        <View style={styles.container}>

            <View style={styles.topbar}></View>

            <View style={styles.postInfo}>

                <Image source={require('../../media/example-profile-picture.jpeg')} style={styles.profilePicture} />

                <View style={styles.usernameAndTitle}>

                    <Text style={styles.title}>My Artwork</Text>

                    <Text style={styles.username}>Kobeast</Text>

                </View>

            </View>

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

    topbar: {
        position: 'absolute',
        top: 0,
        backgroundColor: '#73A3D3',
        width: 400,
        height: 50,
    },

    postInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    profilePicture: {
        width: 62,
        height: 62,
        borderRadius: 100,
    },

    usernameAndTitle: {
        paddingLeft: 10,
    },

    title: {
        fontSize: 16,
        fontWeight: 600,
    },

    username: {
        fontSize: 21,
        fontWeight: 600,
    },
})

export default ArtworkApp;