import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  modeRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.lightBlack,
    borderRadius: 35,
    gap: 20,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  modeText: {
    color: COLORS.white,
    fontFamily: FONTS.Regular,
    fontSize: SIZES.large,
  },
  modeImage: {
    width: 30,
    height: 30,
  },
});
