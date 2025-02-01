import React, { useContext, useReducer, useCallback } from 'react';
import { View, ImageBackground, Dimensions, Text, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import Spacex from '../../../assets/svgComponents/Spacex';
import styles from './Login.style';
import UserInput from '../../components/UserInput';
import CommonButton from '../../components/CommonButton';
import { AuthContext } from '../../contexts/AuthContext';
import CommonAlert from '../../components/CommonAlert';

const formReducer = (state, action) => {

  switch (action.type) {
    case 'FORM_INPUT_UPDATE':
      const { input, value, isValid } = action;
      return {
        ...state,
        inputValues: { ...state.inputValues, [input]: value },
        inputValidities: { ...state.inputValidities, [input]: isValid },
        formIsValid: Object.values({
          ...state.inputValidities,
          [input]: isValid
        }).every(Boolean)
      };
    default:
      return state;
  }
};

function Login(props) {

  const [messageAlertVisible, setMessageAlertVisible] = React.useState({
    visible: false,
    message: "",
  });

  const [formState, dispatchFormState] = useReducer(formReducer, {
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

  const inputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
    dispatchFormState({
      type: 'FORM_INPUT_UPDATE',
      value: inputValue,
      isValid: inputValidity,
      input: inputIdentifier
    });
  }, []);

  const handleLogin = async () => {
    if (!formState.formIsValid) {
      return setMessageAlertVisible({
        visible: true,
        message: "Error! Please enter a valid email and password."
      })
    };
    try {
      await login(formState.inputValues);
    } catch (error) {
      console.log(error);
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
          required
          errorText="please enter valid email"
          isValid={formState.inputValidities.email}
        />
        <UserInput
          id="password"
          value={formState.inputValues.password}
          onChangeText={inputChangeHandler}
          placeholder='Your password'
          required
          minLength={5}
          errorText="please enter valid password"
          isValid={formState.inputValidities.password}
        />
        <CommonButton title='Login' onPress={() => handleLogin()} />
        <CommonAlert alertVisible={messageAlertVisible} setAlertVisible={setMessageAlertVisible} />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Login;