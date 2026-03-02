import { Tabs } from "expo-router";

export default function Layout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: '#000',
            tabBarStyle: {
                backgroundColor: '#d2d2d2',
            }, tabBarLabelStyle: {
                fontSize: 12,
            }
        }}>
            <Tabs.Screen name="index" options={{ tabBarItemStyle: { display: "none" } }} />
            <Tabs.Screen name="notes" options={{ title: "Notes" }} />
            <Tabs.Screen name="profile" options={{ title: "Profile" }} />
        </Tabs>
    );
}