import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  inputFiled: {
    backgroundColor: COLORS.lightBlack,
    borderRadius: SIZES.radius,
    padding: 10,
    color: COLORS.lightGrey,
    fontFamily: FONTS.Light,
  },
});
