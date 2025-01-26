import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const AuthStack = createNativeStackNavigator();

export default function AuthStackNavigator() {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="SignUp" component={SignUp} />
        </AuthStack.Navigator>
    );
}