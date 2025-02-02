import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styles from './CommonButton.style';

function CommonButton({ title, onPress, loading }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {
                loading ?
                    <ActivityIndicator color="white" /> :
                    <Text style={styles.buttonText}>{title}</Text>
            }
        </TouchableOpacity>
    )
}

export default CommonButton;