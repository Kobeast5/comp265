import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: '#73A3D3',
            },
            headerShown: false,
            headerShadowVisible: false,
            headerTintColor: '#000',
        }}>
            <Stack.Screen name="index" />
        </Stack>
    );
}

export default Layout;