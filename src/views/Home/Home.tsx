import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { format, set, sub } from "date-fns";
import fetchApi from "../../utils/fetch";
import Header from "../../components/Header";
import TodaysImage from "../../components/TodaysImage";
import LastFiveDaysImages from "../../components/LastFiveDaysImages";
import { PostImage } from "../../types";

const Home = () => {
    const [todaysImage, setTodaysImage] = useState<PostImage>({});
    const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);
    
    useEffect(() => {
        const loadTodaysImage = async () => {
            try {
                const todaysImageResponse = await fetchApi();
                setTodaysImage(todaysImageResponse);
            } catch (error) {
                console.log(error);
                setTodaysImage({})
            }
        };

        const loadLastFiveDaysImages = async () => {
            try{
                const date = new Date();
                const todaysDate = format(date, 'yyy-MM-dd');
                const fiveDatesAgoDate = format(sub(date, {days:5}), 'yyy-MM-dd');

                const lastFiveDaysImagesResponse = await fetchApi(`&start_date=${fiveDatesAgoDate}&end_date=${todaysDate}`,);

                setLastFiveDaysImages(lastFiveDaysImagesResponse);
            } catch (error) {
                console.log(error);
                setLastFiveDaysImages([]);
            }
        }

        loadTodaysImage().catch(null);
        loadLastFiveDaysImages().catch(null);
    }, []);

    return(
        <View style={styles.container}>
            <Header />
            <TodaysImage {...todaysImage}/>
            <LastFiveDaysImages postImages={lastFiveDaysImages} />
        </View>
    );
};  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
    }
});

export default Home;