import { Link } from "expo-router";
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

const DiscoverScreen = () => {
    return (
        <View style={styles.screen} >
            <StatusBar barStyle="light-content" />

            <ScrollView style={styles.discoveryList}>

                <ScrollView horizontal style={styles.carousel} showsHorizontalScrollIndicator={false} >

                    <Link href="/discover/search-results" style={styles.carouselLink}>
                        <ImageBackground
                            source={require("../../../media/klee.jpeg")}
                            style={styles.carouselImage}
                        >
                            <View style={styles.darkOverlay} />
                            <Text style={styles.carouselImageText}>#GenshinImpact</Text>
                        </ImageBackground>
                    </Link>

                    <Link href="/discover/search-results" style={styles.carouselLink}>
                        <ImageBackground
                            source={require("../../../media/galaxy-rangers.jpeg")}
                            style={styles.carouselImage}
                        >
                            <View style={styles.darkOverlay} />
                            <Text style={styles.carouselImageText}>#GalaxyRangers</Text>
                        </ImageBackground>
                    </Link>

                    <Link href="/discover/search-results" style={styles.carouselLink}>
                        <ImageBackground
                            source={require("../../../media/seele.jpeg")}
                            style={styles.carouselImage}
                        >
                            <View style={styles.darkOverlay} />
                            <Text style={styles.carouselImageText}>#StarRail</Text>
                        </ImageBackground>
                    </Link>

                    <Link href="/discover/search-results" style={styles.carouselLink}>
                        <ImageBackground
                            source={require("../../../media/zhongli.jpeg")}
                            style={styles.carouselImage}
                        >
                            <View style={styles.darkOverlay} />
                            <Text style={styles.carouselImageText}>#Zhongli</Text>
                        </ImageBackground>
                    </Link>

                </ScrollView>

                <View style={styles.imageList} >

                    <Link href="/discover/post" style={styles.imageListLink}>
                        <Image source={require("../../../media/keqing.jpeg")} style={styles.imageListItem} />
                    </Link>
                    <Link href="/discover/post" style={styles.imageListLink}>
                        <Image source={require("../../../media/zhongli.jpeg")} style={styles.imageListItem} />
                    </Link>
                    <Link href="/discover/post" style={styles.imageListLink}>
                        <Image source={require("../../../media/yoimiya.jpeg")} style={styles.imageListItem} />
                    </Link>
                    <Link href="/discover/post" style={styles.imageListLink}>
                        <Image source={require("../../../media/seele.jpeg")} style={styles.imageListItem} />
                    </Link>
                    <Link href="/discover/post" style={styles.imageListLink}>
                        <Image source={require("../../../media/klee.jpeg")} style={styles.imageListItem} />
                    </Link>
                    <Link href="/discover/post" style={styles.imageListLink}>
                        <Image source={require("../../../media/galaxy-rangers.jpeg")} style={styles.imageListItem} />
                    </Link>

                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },

    discoveryList: {
        marginHorizontal: 16,
    },

    carousel: {
        marginTop: 16,
    },

    carouselLink: {
        marginRight: 16,
    },

    carouselImage: {
        width: 145,
        height: 145,
        borderRadius: 16,
        overflow: "hidden",
        justifyContent: 'flex-end',
    },

    darkOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.4)",
    },

    carouselImageText: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 17,
        fontWeight: "600",
        marginBottom: 10,
    },

    imageList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: 16,
    },

    imageListLink: {
        marginBottom: 16,
    },

    imageListItem: {
        width: 170,
        height: 170,
        borderRadius: 18,
    },
});

export default DiscoverScreen;