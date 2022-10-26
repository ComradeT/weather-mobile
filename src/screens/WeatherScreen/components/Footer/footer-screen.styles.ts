import { StyleSheet } from 'react-native';
import { colors } from 'styles';

export const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: colors.whiteOpacity[60],
  },
  contentDesc: {
    fontSize: 15,
    color: colors.white,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  parameterItem: {
    width: '50%',
    marginBottom: 35,
  },
});
