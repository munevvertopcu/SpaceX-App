import React, { useContext, useState } from 'react';
import { View, Text, Dimensions, ImageBackground, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import styles from './SignUp.style';
import Spacex from '../../../assets/svgComponents/Spacex';
import CommonButton from '../../components/CommonButton';
import CommonAlert from '../../components/CommonAlert';
import UserInput from '../../components/UserInput';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';

function SignUp(props) {

    const [messageAlertVisible, setMessageAlertVisible] = useState({
        visible: false,
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const { formState, inputChangeHandler } = useForm({
        inputValues: {
            email: '',
            password: '',
            passwordAgain: ''
        },
        inputValidities: {
            email: false,
            password: false,
            passwordAgain: false
        },
        formIsValid: false,
    });

    const { register } = useContext(AuthContext);

    const deviceWidth = Dimensions.get("window").width;

    const handleRegister = async () => {
        if (!formState.formIsValid) {
            return setMessageAlertVisible({
                visible: true,
                message: "Error! Please enter a valid email and password."
            });
        };
        try {
            setIsLoading(true);
            await register(formState.inputValues);
        } catch (error) {
            setMessageAlertVisible({
                visible: true,
                message: error.message
            })
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
            <ImageBackground
                source={require('../../../assets/image.jpg')}
                style={styles.imageContainer}
                resizeMode='stretch'
                imageStyle={{ opacity: .2 }}
            >
                <View style={styles.spacexLogo}>
                    <Spacex width={deviceWidth * 0.8} height={80} fill='#fff' />
                </View>
                <Text style={styles.text} >Please fill out the form below to complete your profile</Text>
                <Text style={styles.text} >Do you have an account already ?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <UserInput
                    id='email'
                    value={formState.inputValues.email}
                    onChangeText={inputChangeHandler}
                    placeholder='Your email'
                    error={formState.inputErrors.email}
                />
                <UserInput
                    id='password'
                    value={formState.inputValues.password}
                    onChangeText={inputChangeHandler}
                    placeholder='Your password'
                    error={formState.inputErrors.password}
                />
                <UserInput
                    id='passwordAgain'
                    value={formState.inputValues.passwordAgain}
                    onChangeText={inputChangeHandler}
                    placeholder='Your password'
                    error={formState.inputErrors.passwordAgain}
                />
                <CommonButton title='Create your account' onPress={handleRegister} loading={isLoading} />
            </ImageBackground>
            <CommonAlert alertVisible={messageAlertVisible} setAlertVisible={setMessageAlertVisible} />
        </KeyboardAvoidingView>
    )
}

export default SignUp;