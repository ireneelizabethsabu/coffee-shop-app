/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, FONTS, icons, IMAGES, SIZES} from '../theme';
import TabIcon from '../components/TabIcon/TabIcon';
import FavoriteScreen from '../screens/Favorites/FavoriteScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CartScreen from '../screens/Cart/CartScreen';
import OrderHistoryScreen from '../screens/OrderHistory/OrderHistoryScreen';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarHideOnKeyboard: true,
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: COLORS.black,
    borderTopWidth: 0,
  },

  tabBarInactiveTintColor: COLORS.grey,
  tabBarActiveTintColor: COLORS.orange,
  headerLeft: () => (
    <TouchableOpacity style={styles.iconContainer}>
      <Icon name={icons.grid} size={20} color={COLORS.grey} />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity style={styles.iconContainer}>
      <Image
        source={IMAGES.profilePhoto}
        style={styles.profilePhoto}
        resizeMode="contain"
      />
    </TouchableOpacity>
  ),
  headerStyle: {
    backgroundColor: COLORS.black,
  },
  headerShadowVisible: false,
  headerTitleAlign: 'center',
  headerLeftContainerStyle: {
    paddingLeft: 20,
  },
  headerRightContainerStyle: {
    paddingRight: 20,
  },
  headerTitleStyle: {
    color: COLORS.white,
    fontSize: SIZES.xxlarge,
    fontFamily: FONTS.Medium,
  },
};

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => <TabIcon icon={icons.home} color={color} />,
          title: '',
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
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
        name="Order History"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({color}) => <TabIcon icon={icons.bell} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightBlack,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePhoto: {
    width: '100%',
    height: '100%',
    borderRadius: SIZES.radius,
  },
});
