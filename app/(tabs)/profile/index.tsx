import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Profile Screen</Text>
            {/* Navigate to Details screen inside the same tab */}
            <Link href="/profile/settings">Go to Details</Link>
        </View>
    );
}