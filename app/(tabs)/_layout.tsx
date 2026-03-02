import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

const Layout = () => {
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
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="discover"
                options={{
                    title: 'Discover',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'browsers' : 'browsers-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'person-circle-sharp' : 'person-circle-outline'} color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    );
}

export default Layout