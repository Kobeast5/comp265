import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Home Screen</Text>
            {/* Navigate to Details screen inside the same tab */}
            <Link href="/notes/details">Go to Details</Link>
        </View>
    );
}