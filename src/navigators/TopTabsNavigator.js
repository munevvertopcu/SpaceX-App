import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UpcomingLaunches from '../screens/UpcomingLaunches';
import LatestLaunches from '../screens/LatestLaunches';

const TopTab = createMaterialTopTabNavigator();

export default function TopTabsScreen() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#264061' },
        tabBarIndicatorStyle: { backgroundColor: 'white' },
      }}
    >
      <TopTab.Screen name="UpcomingLaunches" component={UpcomingLaunches} options={{ title: 'Upcoming' }} />
      <TopTab.Screen name="LatestLaunches" component={LatestLaunches} options={{ title: 'Latest' }} />
    </TopTab.Navigator>
  );
}