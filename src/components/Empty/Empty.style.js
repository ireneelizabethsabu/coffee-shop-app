import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  content: {
    color: COLORS.lightGrey,
    fontSize: SIZES.xlarge,
    fontFamily: FONTS.Regular,
  },
});
