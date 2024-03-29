import React, { FC } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { PostImage, RootStackParams } from "../../types";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Detail'>;

const TodaysImage: FC<PostImage> = ({date, title, url, explanation}) => {
    const { navigate } = useNavigation<PostImageNavigationProps>();

    const handleViewPress = () => {
        navigate('Detail', {title, date, url, explanation});
    };

    return(
        <View style= {styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: url}} style={styles.image} />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.date}>
                {date}
            </Text>
            <View style={styles.buttonContainer}>
                <Button title="View" color="#2271b3" onPress={handleViewPress} />
            </View>
        </View>
    );
};  

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2c449d",
        marginVertical: 15,
        borderRadius: 32,
        padding: 17,
    },
    image: {
        width: '100%',
        borderRadius: 32,
        height: 300,
        borderWidth: 2,
        borderColor: "#fff",
    },
    imageContainer: {
    },
    title: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 12,
    },
    date: {
        color: "#fff",
        fontSize: 16,

    },
    buttonContainer: {
        alignItems: "flex-end",  
    }
});

export default TodaysImage;