import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

const ArtworkApp = () => {
    return (

        <View style={styles.screen}>

            <StatusBar barStyle="light-content" />
            <View style={styles.topbar}></View>

            <ScrollView contentContainerStyle={styles.container}>

                <View style={styles.postInfo}>

                    <Image source={require('../../media/example-profile-picture.jpeg')} style={styles.profilePicture} />

                    <View style={styles.usernameAndTitle}>

                        <Text style={styles.title}>Seele</Text>
                        <Text style={styles.username}>By: Amaki</Text>

                    </View>

                </View>

                <Image source={require('../../media/seele.jpeg')} style={styles.postImage} />

            </ScrollView>

        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },

    container: {
        paddingTop: 66,
    },

    topbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#73A3D3',
        height: 50,
        zIndex: 1000,
    },

    postInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        paddingBottom: 16,
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

    postImage: {
        width: '100%',
        height: 640,
    },
})

export default ArtworkApp;