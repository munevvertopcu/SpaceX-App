import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './UserInput.style';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function UserInput({ id, value, onChangeText, required, errorText, minLength, placeholder, isValid }) {

    const [touched, setTouched] = useState(false);

    const textChangeHandler = (text) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let valid = true;
        if (required && text.trim().length === 0) {
            valid = false;
        }
        if (id === "email" && !emailRegex.test(text)) {
            valid = false;
        }
        if (minLength && text.length < minLength) {
            valid = false;
        }
        onChangeText(id, text, valid);
    };

    const lostFocusHandler = () => {
        setTouched(true);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={textChangeHandler}
                    placeholder={placeholder}
                    placeholderTextColor="#36445B"
                    secureTextEntry={id.includes("password")}
                    onBlur={lostFocusHandler}
                />
                <MaterialCommunityIcons
                    name={id.includes("password") ? "eye-off" : "email"}
                    size={24} color="#36445B"
                    style={styles.icon} />
            </View>
            {
                !isValid && touched && (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>{errorText}</Text>
                    </View>
                )
            }
        </View>
    )
}

export default UserInput;