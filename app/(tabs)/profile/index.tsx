import { Link, useLocalSearchParams } from "expo-router";
import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";

const ProfileScreen = () => {
    const { username } = useLocalSearchParams();

    return (
        <View style={styles.screen}>

            <Image source={require('../../../media/example-profile-picture.jpeg')} style={styles.profileImage} />
            <Text style={styles.username}>{username ? username : "Kobeast"}</Text>
            {/* Navigate to Details screen inside the same tab */}
            <Link href="/profile/settings">Edit Profile</Link>
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

    profileImage: {
        width: 136,
        height: 136,
        borderRadius: 100,
    },

    username: {
        fontSize: 28,
        fontWeight: 600,
        marginTop: 12,
        marginBottom: 4,
    },
})

export default ProfileScreen;