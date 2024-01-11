import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
  },
  btnContainer: {
    backgroundColor: COLORS.orange,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radiusLarge,
  },
  priceContainer: {
    flex: 0.5,
  },
  content: (size, family, color) => ({
    fontSize: size,
    fontFamily: family,
    color: color,
    textAlign: 'center',
  }),

  priceWrapper: {
    flexDirection: 'row',
    gap: 5,
  },
});
