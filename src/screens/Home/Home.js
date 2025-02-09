import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ImageBackground } from 'react-native';
import styles from './Home.style';
import NewsList from '../../components/NewsList';
import news_data from '../../data/news_data.json';

function Home({ navigation }) {

    const [list, setList] = useState([]);

    useEffect(() => {
        setList(news_data)
    }, []);

    const renderItem = ({ item }) => {
        return (
            <NewsList item={item} navigation={navigation} />
        );
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{
                    uri: 'https://images.unsplash.com/photo-1522760122564-d567dac67f45',
                }}
                style={styles.image}
                resizeMode="stretch">
                <Text style={styles.header}>Welcome to SpaceX</Text>
            </ImageBackground>
            <View style={styles.newsContainer}>
                <Text style={styles.title}>LATEST NEWS</Text>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={list}
                    renderItem={renderItem}
                />
            </View>
        </View>
    );
};

export default Home;