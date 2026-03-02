import { router } from 'expo-router';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const SettingsScreen = () => {
    const [input, setInput] = useState("");

    return (
        <View style={styles.screen}>

            <Text style={styles.username}>Change Your Name</Text>
            <TextInput
                editable
                onChangeText={setInput}
                style={styles.textInput}
                placeholder="Type a new name."
                numberOfLines={1}
                maxLength={24} >
            </TextInput>

            <Button
                title="Save"
                onPress={() =>
                    router.replace({
                        pathname: "/profile",
                        params: { username: input },
                    })
                }
            />

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

    username: {
        fontSize: 28,
        fontWeight: 600,
        marginTop: 12,
        marginBottom: 4,
    },

    textInput: {
        fontSize: 16,
        marginTop: 8,
        textAlign: 'center',
        backgroundColor: "#cfcfcf",
        padding: 4,
        paddingLeft: 48,
        paddingRight: 48,
        borderWidth: 1,
        borderColor: '#000',
    },
})

export default SettingsScreen;