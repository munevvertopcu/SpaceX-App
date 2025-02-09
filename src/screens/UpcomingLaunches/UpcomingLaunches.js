import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './UpcomingLaunches.style';
import { useGet } from '../../hooks/useGet';
import Launch from '../../components/Launch';

function UpcomingLaunches() {

    const data = useGet("feed/events", [])

    const renderItem = ({ item }) => {
        return (
            <Launch item={item} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
            />
        </View>
    );
};

export default UpcomingLaunches;