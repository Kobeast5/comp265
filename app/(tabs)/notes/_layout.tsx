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
            <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="details" options={{ title: "Details" }} />
        </Stack>
    );
}