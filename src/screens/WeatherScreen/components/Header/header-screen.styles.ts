import { StyleSheet } from 'react-native';
import { colors } from 'styles';

export const styles = StyleSheet.create({
  header: {
    height: 100,
    width: '100%',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cityTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.white,
    width: 200,
  },
  text: {
    fontSize: 15,
    color: colors.whiteOpacity[60],
  },
});
