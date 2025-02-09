import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
//screens
import TopTabsScreen from './TopTabsNavigator';
import HomeStackNavigator from './HomeStackNavigator';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
    HomeStack: 'home',
    TopTabs: 'calendar-clear-sharp',
    Profile: 'person'
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
            <Tab.Screen name="TopTabs" component={TopTabsScreen} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}