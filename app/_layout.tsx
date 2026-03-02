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
            <Tabs.Screen
                name="(tabs)/index"
                options={{
                    title: 'Assignment 1',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    );
}