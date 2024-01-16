import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 80,
  },
  separator: {
    height: 20,
  },
  btnContainer: {
    backgroundColor: COLORS.orange,
    width: 90,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radiusLarge,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  btnText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontFamily: FONTS.Medium,
  },
});
