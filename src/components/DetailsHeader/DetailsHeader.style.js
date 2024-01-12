import {StatusBar, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../theme';

export const styles = StyleSheet.create({
  image: imageHeight => ({
    height: imageHeight,
    justifyContent: 'flex-end',
  }),
  imageStyle: {
    borderTopRightRadius: SIZES.radiusLarge,
    borderTopLeftRadius: SIZES.radiusLarge,
  },
  imageOverlayContainer: {
    backgroundColor: COLORS.lightBlackTransparent,
    padding: 20,
    flexDirection: 'row',
    gap: 40,
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
  smallBoxWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  iconContainer: topOffset => ({
    width: 35,
    height: 35,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightBlack,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: topOffset,
    right: 20,
  }),
});
