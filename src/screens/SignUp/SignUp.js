import React from 'react';
import { View, Text, Dimensions, ImageBackground, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import styles from './SignUp.style';
import Spacex from '../../../assets/svgComponents/Spacex';
import CommonButton from '../../components/CommonButton';
import UserInput from '../../components/UserInput';

function SignUp(props) {

    const deviceWidth = Dimensions.get("window").width;

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
                <UserInput title='Email' />
                <UserInput title='Password' />
                <UserInput title='Password' />
                <CommonButton title='Create your account' />
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

export default SignUp;