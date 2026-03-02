import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: '#73A3D3',
            },
            headerShadowVisible: false,
            headerTintColor: '#000',
        }}>
            <Stack.Screen name="index" options={{ title: "Profile" }} />
            <Stack.Screen name="settings" options={{ title: "Settings" }} />
        </Stack>
    );
}