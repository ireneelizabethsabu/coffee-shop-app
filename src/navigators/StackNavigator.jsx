/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {icons, COLORS, SIZES, FONTS} from '../theme';
import Icon from 'react-native-vector-icons/Ionicons';
import DetailsSreen from '../screens/Details/DetailsSreen';
import TabNavigator from './TabNavigator';
import PaymentScreen from '../screens/Payments/PaymentScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: '',
      }}>
      <Stack.Screen
        name="HomeTab"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Details"
        component={DetailsSreen}
        options={({navigation}) => ({
          headerLeft: () => (
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={icons.chevronBack} size={25} color={COLORS.grey} />
            </TouchableOpacity>
          ),
          headerTransparent: true,
        })}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={({navigation}) => ({
          headerLeft: () => (
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={icons.chevronBack} size={25} color={COLORS.grey} />
            </TouchableOpacity>
          ),
          title: 'Payment',
          headerTitleStyle: {
            color: COLORS.white,
            fontSize: SIZES.xxlarge,
            fontFamily: FONTS.Medium,
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.black,
          },
        })}
      />
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
