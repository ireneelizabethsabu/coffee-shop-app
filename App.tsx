import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {COLORS} from './src/theme';
import {StatusBar} from 'react-native';
import StackNavigator from './src/navigators/StackNavigator';

function App() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: COLORS.black,
        },
      }}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
