import React, { FC } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { PostImage as PostImageType } from "../../types";

const PostImage: FC<PostImageType> = ({ title, date }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title="View" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: 'rgba(18,39,113,255)',
       borderRadius: 20,
       marginBottom: 12, 
       padding: 15,
    },
    title: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 12,
    },
    date: {
        color: "#fff",
        fontSize: 15,
        marginBottom: 12,
    },
    buttonContainer: {
        alignItems: "flex-end",
    }
});

export default PostImage;