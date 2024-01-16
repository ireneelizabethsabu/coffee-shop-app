import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './Empty.style';

const Empty = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>{text}</Text>
    </View>
  );
};

export default Empty;
