import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screens
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import Schedule from './src/screens/Schedule';

import { AuthContext } from './src/contexts/AuthContext';
import { useAuth } from './src/hooks/useAuth';

const AppStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#264061",
          borderColor: "#264061",
          borderRadius: 10,
          marginHorizontal: 10,
          marginBottom: 10,
          position: 'absolute'
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          return <Ionicons
            name={route.name === "Home" ? "home" : "calendar-clear-sharp"}
            size={30}
            color={focused ? 'white' : 'grey'}
          />
        }
      })}
    >
      <Tab.Screen
        name='Home'
        component={Home}
      />
      <Tab.Screen
        name='Schedule'
        component={Schedule}
      />
    </Tab.Navigator>
  )
}

export default function App() {

  const { auth, state } = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer>
        {
          state.accessToken == null ?
            <AppStack.Navigator headerMode="screen">
              <AppStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              <AppStack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            </AppStack.Navigator>
            :
            <AppStack.Navigator headerMode="screen">
              <AppStack.Screen name="MyTab" component={MyTab} options={{ headerShown: false }} />
            </AppStack.Navigator>
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}