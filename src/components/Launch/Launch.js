import React from 'react';
import { ScrollView, Text, ImageBackground } from 'react-native';
import styles from './Launch.styles';

function Launch({ item }) {

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    return (
        <ImageBackground
            source={{
                uri: item.image,
            }}
            style={styles.image}
            resizeMode='stretch'
        >
            <ScrollView>
                <Text style={styles.title}>{item.title}</Text>
                {
                    item.scheduledAt ?
                        <Text style={styles.title}>Date: {formatDate(item.scheduledAt)}</Text> :
                        <Text style={styles.title}>Date: {formatDate(item.updatedAt)}</Text>
                }
                {
                    item.description &&
                    <Text style={styles.title}>{item.description}</Text>
                }
            </ScrollView>
        </ImageBackground>
    );
};

export default Launch;