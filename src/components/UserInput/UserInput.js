import React, { useReducer } from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './UserInput.style';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return {
                ...state,
                value: action.value,
                isValid: action.isValid
            };
        case 'INPUT_BLUR':
            return {
                ...state,
                touched: true
            };
        default:
            return state;
    }
}

function UserInput({ id, initialValue, onChangeText, required, errorText, minLength, placeholder }) {

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: initialValue || '',
        isValid: true,
        touched: false
    });

    const textChangeHandler = (text) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let isValid = true;
        if (required && text.trim().length === 0) {
            isValid = false;
        }
        if (id === "email" && !emailRegex.test(text)) {
            isValid = false;
        }
        if (minLength !== null && text.length < minLength) {
            isValid = false;
        }
        dispatch({ type: 'INPUT_CHANGE', value: text, isValid });
        onChangeText(id, text, isValid);
    };

    const lostFocusHandler = () => {
        dispatch({ type: 'INPUT_BLUR' });
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={inputState.value}
                    onChangeText={textChangeHandler}
                    placeholder={placeholder}
                    placeholderTextColor="#36445B"
                    secureTextEntry={id === 'password'}
                    onBlur={lostFocusHandler}
                />
                <MaterialCommunityIcons
                    name={id === "password" ? "eye-off" : "email"}
                    size={24} color="#36445B"
                    style={styles.icon} />
            </View>
            {!inputState.isValid && inputState.touched && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{errorText}</Text>
                </View>
            )}
        </View>
    )
}

export default UserInput;