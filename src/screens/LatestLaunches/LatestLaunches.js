import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './LatestLaunches.styles';
import { useGet } from '../../hooks/useGet';
import Launch from '../../components/Launch';

function LatestLaunches() {

    const data = useGet("feed", [])

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

export default LatestLaunches;