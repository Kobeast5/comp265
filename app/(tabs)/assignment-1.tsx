import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Button, Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';


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

                <View style={styles.interactionMenu}>

                    <View style={styles.buttonList}>

                        <Pressable style={styles.interactionButton}>
                            <Ionicons name="heart" size={28} color="black" />
                        </Pressable>

                        <Pressable style={styles.interactionButton}>
                            <Ionicons name="chatbubble" size={28} color="black" />
                        </Pressable>

                        <Pressable style={styles.interactionButton}>
                            <Ionicons name="share" size={28} color="black" />
                        </Pressable>

                    </View>

                    <View style={styles.followButton}>

                        <Button title="Follow" color='black' />

                    </View>

                </View>

                <Text style={styles.description}>My first attempt at drawing this character. Hope y’all like it!</Text>

                <View style={styles.postInfo}>

                    <Image source={require('../../media/example-profile-picture.jpeg')} style={styles.profilePictureLarge} />
                    <Text style={styles.usernameLarge}>Amaki</Text>

                </View>

                <ScrollView horizontal style={styles.previewCarousel} showsHorizontalScrollIndicator={false} >

                    <Image source={require('../../media/seele.jpeg')} style={styles.previewCarouselItem} />
                    <Image source={require('../../media/klee.jpeg')} style={styles.previewCarouselItem} />
                    <Image source={require('../../media/keqing.jpeg')} style={styles.previewCarouselItem} />
                    <Pressable style={styles.previewCarouselMore}>
                        <Ionicons name="add" size={48} color="black" />
                    </Pressable>

                </ScrollView>

                <Text style={styles.sectionHeader}>Comments</Text>
                <TextInput
                    editable
                    multiline
                    style={styles.commentInput}
                    placeholder="Write a comment!"
                    numberOfLines={4}
                    maxLength={160} >
                </TextInput>

                <View style={styles.commentList}>
                    <View style={styles.commentItem}>
                        <Ionicons name="person-circle-outline" size={50} color="black" marginRight={8} />
                        <View>
                            <Text style={styles.commentUsername}>User018053</Text>
                            <Text style={styles.commentText}>This looks great! I love all the work you do. Please keep up the good work!</Text>
                        </View>
                    </View>

                    <View style={styles.commentItem}>
                        <Ionicons name="person-circle-outline" size={50} color="black" marginRight={8} />
                        <View>
                            <Text style={styles.commentUsername}>User130089</Text>
                            <Text style={styles.commentText}>Yo, what app do use for your drawings?</Text>
                        </View>
                    </View>
                </View>

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
        marginLeft: 16,
        marginBottom: 16,
    },

    profilePicture: {
        width: 48,
        height: 48,
        borderRadius: 100,
    },

    usernameAndTitle: {
        marginLeft: 10,
    },

    title: {
        fontSize: 14,
        fontWeight: 600,
    },

    username: {
        fontSize: 18,
        fontWeight: 600,
    },

    postImage: {
        width: '100%',
        height: 640,
    },

    interactionMenu: {
        flexDirection: 'row',
        margin: 16,
        justifyContent: "space-between",
    },

    buttonList: {
        flexDirection: 'row',
    },

    interactionButton: {
        color: 'black',
        padding: 9,
        borderRadius: 40,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'white',
        marginRight: 8,
    },

    followButton: {
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 340,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'white',
    },

    description: {
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16,
        fontSize: 16,
    },

    profilePictureLarge: {
        width: 60,
        height: 60,
        borderRadius: 100,
    },

    usernameLarge: {
        fontSize: 22,
        fontWeight: 600,
        marginLeft: 10,
    },

    previewCarousel: {
        marginLeft: 16,
        marginRight: 16,
    },

    previewCarouselItem: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginLeft: 6,
        marginRight: 6,
    },

    previewCarouselMore: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginLeft: 6,
        marginRight: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c7c7c7',
    },

    sectionHeader: {
        fontSize: 32,
        margin: 16,
        fontWeight: 600,
    },

    commentInput: {
        marginLeft: 16,
        marginRight: 16,
        padding: 6,
        fontSize: 16,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'black',
        height: 92,
    },

    commentList: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 16,
    },

    commentItem: {
        flexDirection: 'row',
        marginBottom: 16,
    },

    commentUsername: {
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 8,
    },

    commentText: {
        fontSize: 16,
        marginRight: 56,
    },
})

export default ArtworkApp;