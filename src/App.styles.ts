import { StyleSheet } from 'react-native';
import { colors } from './styles';

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
  header: {
    width: '100%',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  tempBlock: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: colors.white,
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
