import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './DetailsFooter.style';
import {icons} from '../../theme';

const DetailsFooter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>Price</Text>
        <Text style={styles.priceText}>23.4</Text>
      </View>
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsFooter;
