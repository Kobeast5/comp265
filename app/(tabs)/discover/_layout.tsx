import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StyleSheet, TextInput, View } from "react-native";

const Layout = () => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#73A3D3',
                },
                headerTitle: () => (
                    <View style={styles.searchBar}>
                        <Ionicons name="search" size={18} color="#888" style={{ marginRight: 8 }} />
                        <TextInput
                            placeholder="Search"
                            style={styles.searchBarInput}
                            placeholderTextColor="#888"
                        />
                    </View>
                ),
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="search-results" />
            <Stack.Screen name="post" options={{ headerShown: false }} />
        </Stack>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        borderRadius: 20,
        paddingHorizontal: 12,
    },
    searchBarInput: {
        flex: 1,
        paddingVertical: 8,
    }
});
export default Layout;