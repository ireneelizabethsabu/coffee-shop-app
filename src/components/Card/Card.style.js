import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: COLORS.lightBlack,
    borderRadius: SIZES.radiusLarge,
  },
  image: {
    borderRadius: SIZES.radiusLarge,
    flex: 1,
  },
  imageContainer: {
    marginBottom: 10,
    width: 150,
    height: 150,
    borderRadius: SIZES.radiusLarge,
  },
  title: {
    fontFamily: FONTS.Regular,
    color: COLORS.white,
    fontSize: SIZES.large,
    marginBottom: 5,
  },
  subTitle: {
    fontFamily: FONTS.Regular,
    color: COLORS.white,
    fontSize: SIZES.xsmall,
    marginBottom: 5,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  addBtnContainer: {
    backgroundColor: COLORS.orange,
    padding: 10,
    borderRadius: SIZES.radius,
  },
  priceText: {
    fontFamily: FONTS.Regular,
    color: COLORS.white,
    fontSize: SIZES.xlarge,
  },
  priceContainer: {
    justifyContent: 'center',
  },
  currencyText: {
    color: COLORS.orange,
    marginRight: 15,
    fontFamily: FONTS.Bold,
  },
  rating: {
    color: COLORS.white,
    fontFamily: FONTS.Regular,
    lineHeight: 22,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: COLORS.lightBlackTransparent,
    paddingVertical: 5,
    paddingHorizontal: 10,
    gap: 5,
    position: 'absolute',
    right: 0,
    top: 0,
    borderBottomLeftRadius: SIZES.radiusLarge,
    borderTopRightRadius: SIZES.radiusLarge,
  },
});
