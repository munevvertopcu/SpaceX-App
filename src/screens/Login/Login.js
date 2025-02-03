import React, { useContext, useState } from 'react';
import { View, ImageBackground, Dimensions, Text, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import Spacex from '../../../assets/svgComponents/Spacex';
import styles from './Login.style';
import UserInput from '../../components/UserInput';
import CommonButton from '../../components/CommonButton';
import { AuthContext } from '../../contexts/AuthContext';
import CommonAlert from '../../components/CommonAlert';
import { useForm } from '../../hooks/useForm';

function Login(props) {

  const [messageAlertVisible, setMessageAlertVisible] = useState({
    visible: false,
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { formState, inputChangeHandler } = useForm({
    inputValues: {
      email: '',
      password: ''
    },
    inputValidities: {
      email: false,
      password: false
    },
    formIsValid: false
  });

  const { login } = useContext(AuthContext)

  const deviceWidth = Dimensions.get("window").width;

  const handleLogin = async () => {
    if (!formState.formIsValid) {
      return setMessageAlertVisible({
        visible: true,
        message: "Error! Please enter a valid email and password."
      })
    };
    try {
      setIsLoading(true);
      await login(formState.inputValues);
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
        imageStyle={{ opacity: .2 }}>
        <View style={styles.spacexLogo}>
          <Spacex width={deviceWidth * 0.8} height={80} fill='#fff' />
        </View>
        <Text style={styles.text} >Please fill out the form below to complete your profile.</Text>
        <Text style={styles.text} >Don't you have an account already?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <UserInput
          id="email"
          value={formState.inputValues.email}
          onChangeText={inputChangeHandler}
          placeholder='Your email'
          error={formState.inputErrors.email}
        />
        <UserInput
          id="password"
          value={formState.inputValues.password}
          onChangeText={inputChangeHandler}
          placeholder='Your password'
          error={formState.inputErrors.password}
        />
        <CommonButton title='Login' onPress={() => handleLogin()} loading={isLoading} />
        <CommonAlert alertVisible={messageAlertVisible} setAlertVisible={setMessageAlertVisible} />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Login;