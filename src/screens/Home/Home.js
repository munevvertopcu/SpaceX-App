import React from 'react';
import { View, Text } from 'react-native';
import styles from './Home.style';
import { useGet } from '../../hooks/useGet';

function Home() {

    const data = useGet("feed")

    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
};

export default Home;