import Ionicons from '@expo/vector-icons/Ionicons';
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
            <Tabs.Screen
                name="notes"
                options={{
                    title: 'Notes',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'person-circle-sharp' : 'person-circle-outline'} color={color} size={24} />
                    ),
                }} />
        </Tabs>
    );
}