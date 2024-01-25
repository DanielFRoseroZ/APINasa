import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../types";
import Header from "../../components/Header";

const Detail = () => {
    const { params: { title, url, explanation, date } } = useRoute<NativeStackScreenProps<RootStackParams, 'Detail'>['route']>();

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <Image source={{ uri: url }} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <ScrollView style={styles.explanationContainer}>
                    <Text style={styles.explanation}>{explanation}</Text>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#003",
        paddingHorizontal: 16,
    },
    content: {
        backgroundColor: "#2c449d",
        borderRadius: 32,
        marginTop: 15,
        padding: 16,
        flex: 1,
        marginBottom: 20,
    },
    image: {
        width: "100%",
        height: '50%',
        borderColor: "#fff",
        borderRadius: 32,
        borderWidth: 2,
        marginBottom: 16,
    },
    title: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 16,
    },
    date: {
        color: "#fff",
        fontSize: 20,
    },
    explanationContainer: {
        marginVertical: 16,
    },
    explanation: {
        color: "#fff",
        fontSize: 16,
        lineHeight: 24,
    }
});

export default Detail;