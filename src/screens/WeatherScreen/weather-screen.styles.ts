import { StyleSheet } from 'react-native';
import { colors } from 'styles';

export const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tempBlock: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: colors.whiteOpacity[60],
  },
  tempText: {
    fontSize: 80,
    color: colors.white,
  },
  contentDesc: {
    fontSize: 15,
    color: colors.white,
  },
});
