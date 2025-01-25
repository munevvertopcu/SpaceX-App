import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './CommonButton.style';

function CommonButton({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CommonButton;