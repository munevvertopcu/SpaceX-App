import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './UserInput.style';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function UserInput({ id, value, onChangeText, error, placeholder }) {

    const [touched, setTouched] = useState(false);

    const lostFocusHandler = () => {
        setTouched(true);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={(text) => onChangeText(id, text)}
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
                error && touched && (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>{error}</Text>
                    </View>
                )
            }
        </View>
    )
}

export default UserInput;