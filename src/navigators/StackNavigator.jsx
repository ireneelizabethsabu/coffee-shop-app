/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {icons, COLORS, SIZES, IMAGES} from '../theme';
import Icon from 'react-native-vector-icons/Ionicons';
import DetailsSreen from '../screens/Details/DetailsSreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: '',
        headerStyle: {
          backgroundColor: COLORS.black,
        },
      }}>
      <Stack.Screen
        name="HomeTab"
        component={TabNavigator}
        options={{
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
        }}
      />

      <Stack.Screen name="Details" component={DetailsSreen} />
    </Stack.Navigator>
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
