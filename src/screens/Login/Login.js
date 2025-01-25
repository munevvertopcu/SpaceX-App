import React, { useState, useContext } from 'react';
import { View, ImageBackground, Dimensions, Text, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import Spacex from '../../../assets/svgComponents/Spacex';
import styles from './Login.style';
import UserInput from '../../components/UserInput';
import CommonButton from '../../components/CommonButton';
import { AuthContext } from '../../contexts/AuthContext';

function Login(props) {

    const { login } = useContext(AuthContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const deviceWidth = Dimensions.get("window").width;

    const handleLogin = async () => {
        try {
            await login({ email, password })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
            <ImageBackground
                source={require('../../../assets/image.jpg')}
                style={styles.imageContainer}
                resizeMode='stretch'
                imageStyle={{ opacity: .2 }}>
                <View style={styles.spacexLogo}>
                    <Spacex width={deviceWidth * 0.8} height={80} fill='#fff' />
                </View>
                <Text style={styles.text} >Please fill out the form below to complete your profile.</Text>
                <Text style={styles.text} >Don't you have an account already?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <UserInput title="Email" value={email} onChangeText={setEmail} />
                <UserInput title="Password" value={password} onChangeText={setPassword} />
                <CommonButton title='Login' onPress={() => handleLogin()} />
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

export default Login;