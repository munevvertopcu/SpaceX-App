import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';

const MainStack = createNativeStackNavigator();

export default function MainStackNavigator() {
    return (
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
            <MainStack.Screen name="MyTab" component={TabNavigator} />
        </MainStack.Navigator>
    );
}