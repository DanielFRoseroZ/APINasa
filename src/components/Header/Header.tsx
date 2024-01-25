import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const Header = () => {
    return(
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>Explore</Text>
            </View>
            <View style={styles.rightContainer}>
                <Image source={require("../../assets/nasaLogo.png")} style={styles.imagen} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
    },
    leftContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start"
    },
    rightContainer: {
        flex: 1,
        alignItems: "flex-end",
    },
    title: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    imagen: {
        width: 60,
        height: 60,
    },
});

export default Header;