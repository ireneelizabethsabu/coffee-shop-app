/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, icons} from '../theme';
import TabIcon from '../components/TabIcon/TabIcon';
import FavoriteScreen from '../screens/Favorites/FavoriteScreen';
import HomeScreen from '../screens/Home/HomeScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.black,
        },
        tabBarInactiveTintColor: COLORS.grey,
        tabBarActiveTintColor: COLORS.orange,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => <TabIcon icon={icons.home} color={color} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color}) => <TabIcon icon={icons.cart} color={color} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color}) => (
            <TabIcon icon={icons.favorite} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color}) => <TabIcon icon={icons.bell} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
