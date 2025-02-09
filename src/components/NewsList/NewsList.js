import React from 'react';
import { Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './NewsList.style';

function NewsList({ item, navigation }) {

    return (
        <ImageBackground
            source={{
                uri: item.image
            }}
            style={styles.image}
            resizeMode='stretch'>
            <Text style={styles.title} >{item.title}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("NewsDetail", {
                news: item,
            })} >
                <Text style={styles.buttonText}>Read More →</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

export default NewsList;