import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../theme';

export const styles = StyleSheet.create({
  separator: {
    height: 30,
  },
  textContainer: {
    padding: 20,
    backgroundColor: COLORS.lightBlackTransparent,
    borderBottomLeftRadius: SIZES.radiusLarge,
    borderBottomRightRadius: SIZES.radiusLarge,
  },
});
