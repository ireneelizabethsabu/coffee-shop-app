import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../theme';

export const styles = StyleSheet.create({
  image: {
    height: 500,
    justifyContent: 'flex-end',
  },
  imageOverlayContainer: {
    backgroundColor: COLORS.lightBlackTransparent,
    padding: 20,
    flexDirection: 'row',
    gap: 60,
    borderTopLeftRadius: SIZES.radiusLarge,
    borderTopRightRadius: SIZES.radiusLarge,
  },
  textWrapper: {
    gap: 50,
  },
  content: (size, family, color) => ({
    fontSize: size,
    fontFamily: family,
    color: color,
  }),
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  textBox: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radiusLarge,
  },
  boxWrapper: {
    flex: 1,
    gap: 10,
  },
  wideBoxWrapper: {},
  smallBoxWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
});
