import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Footer.style';
import {COLORS, FONTS, SIZES} from '../../theme';

const Footer = ({selectedItem}) => {
  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <Text
          style={styles.content(SIZES.small, FONTS.Regular, COLORS.lightGrey)}>
          Price
        </Text>
        <View style={styles.priceWrapper}>
          <Text
            style={styles.content(SIZES.xxlarge, FONTS.Regular, COLORS.orange)}>
            {selectedItem.currency}
          </Text>
          <Text
            style={styles.content(SIZES.xxlarge, FONTS.Regular, COLORS.white)}>
            {selectedItem.price}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.content(SIZES.large, FONTS.Regular, COLORS.white)}>
          Add to Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
