import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  root: {
    height: 100,
    width: '100%',
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 18,
  },
  button: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  text: {
    fontWeight: '600',
    color: colors.primary,
  },
});

export default styles;
