import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  content: (size, family, color) => ({
    fontSize: size,
    fontFamily: family,
    color: color,
  }),
  paragraph: {
    paddingVertical: 10,
  },
});
