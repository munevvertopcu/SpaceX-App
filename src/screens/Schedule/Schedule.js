import React from 'react';
import { View, Text } from 'react-native';
import styles from './Schedule.style';
import { useGet } from '../../hooks/useGet';

function Schedule() {

    const data = useGet("feed", [])
    console.log(data)

    return (
        <View style={styles.container}>
            <Text>Schedule</Text>
        </View>
    );
};

export default Schedule;