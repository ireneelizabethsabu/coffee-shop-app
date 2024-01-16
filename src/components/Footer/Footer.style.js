import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    justifyContent: 'space-between',
    bottom: 0,
    gap: 30,
    flex: 1,
    backgroundColor: COLORS.black,
  },
  btnContainer: {
    backgroundColor: COLORS.orange,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radiusLarge,
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
