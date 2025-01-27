import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//navigators
import AuthStackNavigator from './src/navigators/AuthStackNavigator';
import MainStackNavigator from './src/navigators/MainStackNavigator';
// Contexts and Hooks
import { AuthContext } from './src/contexts/AuthContext';
import { useAuth } from './src/hooks/useAuth';
//Splash Screen
import { SplashScreen } from './src/screens/SplashScreen';

export default function App() {

  const { auth, state } = useAuth();

  if (state.loading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={{ ...auth, state }}>
      <NavigationContainer>
        {
          state.accessToken == null ?
            <AuthStackNavigator /> : <MainStackNavigator />
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}