import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {IMAGES, COLORS, icons} from '../../theme';
import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from './HomeHeader.style';

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name={icons.grid} size={20} color={COLORS.grey} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Image
          source={IMAGES.profilePhoto}
          style={styles.profilePhoto}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
