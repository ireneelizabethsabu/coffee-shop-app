import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './SizeBox.style';
import {COLORS, FONTS, SIZES} from '../../theme';
import {TouchableOpacity} from 'react-native';

const SizeBox = ({prices, selectedItem, setSelectedItem}) => {
  return (
    <>
      <Text style={styles.content(SIZES.large, FONTS.Bold, COLORS.white)}>
        Sizes
      </Text>
      <View style={styles.sizeContainer}>
        {prices.map(item => (
          <TouchableOpacity
            key={item.size}
            style={styles.sizeBox(selectedItem.size, item.size)}
            onPress={() => {
              setSelectedItem(item);
            }}>
            <Text
              style={styles.content(SIZES.large, FONTS.Medium, COLORS.white)}>
              {item.size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default SizeBox;
