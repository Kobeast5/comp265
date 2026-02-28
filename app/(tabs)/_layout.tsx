import { Tabs } from "expo-router";

export default function Layout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="index" options={{ tabBarItemStyle: { display: "none" } }} />
            <Tabs.Screen name="notes" options={{ title: "Notes" }} />
            <Tabs.Screen name="profile" options={{ title: "Profile" }} />
        </Tabs>
    );
}