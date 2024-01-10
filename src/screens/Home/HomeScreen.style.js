import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  title: {
    color: COLORS.white,
    fontSize: SIZES.huge,

    fontFamily: FONTS.Medium,
  },
  titleContainer: {
    paddingVertical: 20,
  },
  tabText: (tab, activeTab) => ({
    fontFamily: FONTS.Regular,
    color: tab === activeTab ? COLORS.orange : COLORS.lightGrey,
  }),
  tabContainer: {
    paddingVertical: 10,
  },
  tabWrapper: (tab, activeTab) => ({
    borderBottomWidth: 3,
    borderBottomColor: tab === activeTab ? COLORS.orange : COLORS.black,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  }),
  beanTitle: {
    color: COLORS.white,
    fontSize: SIZES.xlarge,
    fontFamily: FONTS.Medium,
  },
});
