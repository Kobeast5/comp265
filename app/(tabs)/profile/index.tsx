import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

const ProfileScreen = () => {
    return (
        <View style={styles.screen}>

            <StatusBar barStyle="light-content" />
            <View style={styles.topbar}></View>

            <ScrollView contentContainerStyle={styles.container}>

                <View style={styles.profileBanner}>

                    <Image
                        source={require("../../../media/alerted-horse.gif")}
                        style={styles.banner}
                    />

                    <Image source={require('../../../media/example-profile-picture.jpeg')} style={styles.profilePicture} />

                </View>

                <View style={styles.profileInfo}>

                    <Text style={styles.username}>Kobeast</Text>
                    <View style={styles.followerInfo}>

                        <Text style={styles.followCounter}>Followers: 0</Text>
                        <Text style={styles.followCounter}>Following: 0</Text>

                    </View>
                    <Text style={styles.description}>I just like looking at art! I'm no good at drawing anything myself.</Text>

                </View>

                <View style={styles.pageBreak} />

                <Text style={styles.noContent}>There's nothing here...</Text>

            </ScrollView>

        </View >
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f0f0f0',
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

    container: {
        paddingTop: 50,
    },

    profileBanner: {
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: 200,
        backgroundColor: "gray",

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 16 },
        shadowOpacity: 0.8,
        shadowRadius: 12,
    },

    banner: {
        ...StyleSheet.absoluteFillObject,
        width: "100%",
        height: "100%",
    },

    profileInfo: {
        marginTop: 80,
        alignItems: "center",
        paddingHorizontal: 16,
    },

    profilePicture: {
        position: "absolute",
        bottom: -75,
        width: 150,
        height: 150,
        borderRadius: 90,
        borderWidth: 4,
        borderColor: "#000",
    },

    username: {
        fontSize: 36,
        fontWeight: 600,
    },

    description: {
        fontSize: 16,
        textAlign: 'center',
    },

    followerInfo: {
        flexDirection: 'row',
        marginVertical: 10,
    },

    followCounter: {
        fontSize: 16,
        marginHorizontal: 20,
        fontWeight: 500,
    },

    pageBreak: {
        height: 2,
        width: "90%",
        backgroundColor: "#bbb",
        marginVertical: 20,
        alignSelf: "center",
    },

    noContent: {
        textAlign: 'center',
        marginTop: 100,
        fontSize: 16,
    },
})

export default ProfileScreen;