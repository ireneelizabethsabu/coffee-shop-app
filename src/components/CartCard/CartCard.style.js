import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../theme';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.lightBlack,
    borderRadius: SIZES.radiusLarge,
    padding: 10,
  },
  image: {
    borderRadius: SIZES.radiusLarge,
    width: 150,
    height: 150,
  },
  cardTopSection: {
    flexDirection: 'row',
    gap: 20,
  },
  content: (size, family, color) => ({
    fontSize: size,
    fontFamily: family,
    color: color,
  }),

  quantityRow: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    paddingTop: 10,
  },
  quantityItem: bgColor => ({
    color: COLORS.white,
    fontSize: SIZES.xlarge,
    fontFamily: FONTS.Medium,
    backgroundColor: bgColor,
    borderRadius: SIZES.radius,
    padding: 10,
    textAlign: 'center',
  }),
  icon: {
    width: 50,
    height: 50,
  },
  quantityItemBg: {
    flex: 1,
  },
  currency: {
    color: COLORS.orange,
  },
  roasted: {
    backgroundColor: COLORS.black,
    borderRadius: SIZES.radiusLarge,
    padding: 15,
    marginTop: 10,
  },
  delete: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 10,
  },
});
