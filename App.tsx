/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeScreen from './src/screens/Home/HomeScreen';
import {COLORS} from './src/theme';
import TabIcon from './src/components/TabIcon/TabIcon';
import {icons} from './src/theme/icons';
import FavoriteScreen from './src/screens/Favorites/FavoriteScreen';
import {StatusBar} from 'react-native';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.black} />
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
            tabBarIcon: ({color}) => (
              <TabIcon icon={icons.home} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
              <TabIcon icon={icons.cart} color={color} />
            ),
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
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
              <TabIcon icon={icons.bell} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
