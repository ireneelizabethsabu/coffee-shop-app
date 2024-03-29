import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../theme';

export const styles = StyleSheet.create({
  content: (size, family, color) => ({
    fontSize: size,
    fontFamily: family,
    color: color,
  }),
  sizeContainer: {
    flexDirection: 'row',
    gap: 20,
    paddingVertical: 10,
  },
  sizeBox: (selectedItem, item) => ({
    borderColor: selectedItem === item ? COLORS.orange : COLORS.lightBlack,
    borderWidth: 2,
    borderRadius: SIZES.radius,
    padding: 10,
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.lightBlack,
  }),
});
