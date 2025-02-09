import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import styles from './LatestLaunches.style';
import { useGet } from '../../hooks/useGet';
import Launch from '../../components/Launch';
import CommonAlert from '../../components/CommonAlert';

function LatestLaunches() {

    const [messageAlertVisible, setMessageAlertVisible] = useState({
        visible: false,
        message: "",
    });

    const { data, error, loading } = useGet("feed", []);

    useEffect(() => {
        if (error) {
            return (
                setMessageAlertVisible({
                    visible: true,
                    message: error.message || "An error occurred while retrieving data. Please try again."
                })
            );
        }
    }, [error])

    const renderItem = ({ item }) => {
        return (
            <Launch item={item} />
        )
    };

    if (loading) {
        return (
            <View style={styles.spinner}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
            />
            <CommonAlert alertVisible={messageAlertVisible} setAlertVisible={setMessageAlertVisible} />
        </View>
    );
};

export default LatestLaunches;