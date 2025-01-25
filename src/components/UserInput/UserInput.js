import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './UserInput.style';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function UserInput({ title, value, onChangeText }) {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={title}
                placeholderTextColor="#36445B"
                secureTextEntry={title === 'Password' && true}
            />
            <MaterialCommunityIcons
                name={title === "Password" ? "eye-off" : "email"}
                size={24} color="#36445B"
                style={styles.icon} />
        </View>
    )
}

export default UserInput;