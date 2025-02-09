import React from 'react';
import { ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import styles from './NewsDetail.style';
import { useRoute, useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function NewsDetail() {

    const route = useRoute();
    const navigation = useNavigation();
    const { news } = route.params;

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <MaterialIcons name="navigate-before" size={35} color="white" />
            </TouchableOpacity>
            <Image
                source={{
                    uri: news.image
                }}
                style={styles.image}
                resizeMode='stretch' />
            <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.summary}>{news.summary}</Text>
            <Text style={styles.date}>
                <Text style={styles.text}>Date: </Text>
                {news.date}
            </Text>
        </ScrollView>
    );
};

export default NewsDetail;