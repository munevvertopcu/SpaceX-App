import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
//screens
import Schedule from '../screens/Schedule';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
    HomeStack: 'home',
    Schedule: 'calendar-clear-sharp',
};

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#264061',
                    borderColor: '#264061',
                    borderRadius: 10,
                    marginHorizontal: 10,
                    marginBottom: 10,
                    position: 'absolute',
                },
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name={TAB_ICONS[route.name]}
                        size={30}
                        color={focused ? 'white' : 'grey'}
                    />
                ),
            })}
        >
            <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
            <Tab.Screen name="Schedule" component={Schedule} />
        </Tab.Navigator>
    );
}