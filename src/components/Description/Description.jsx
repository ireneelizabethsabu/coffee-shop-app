import {Text} from 'react-native';
import React from 'react';
import {styles} from './Description.style';
import {COLORS, FONTS, SIZES} from '../../theme';

const Description = ({description}) => {
  return (
    <>
      <Text style={styles.content(SIZES.large, FONTS.Bold, COLORS.white)}>
        Description
      </Text>
      <Text
        style={[
          styles.content(SIZES.small, FONTS.Light, COLORS.white),
          styles.paragraph,
        ]}>
        {description}
      </Text>
    </>
  );
};

export default Description;
