import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingHorizontal: 30,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  profilePhoto: {
    width: '100%',
    height: '100%',
    borderRadius: SIZES.radius,
  },
  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightBlack,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
