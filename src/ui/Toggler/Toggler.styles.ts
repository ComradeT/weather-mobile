import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.whiteOpacity[20],
    height: 29,
  },
  button: {
    width: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  celButton: {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  fahrButton: {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  degree: {
    position: 'absolute',
    top: 0,
    left: -17,
  },
  degreeText: {
    color: colors.whiteOpacity[40],
    fontSize: 20,
  },
});

export default styles;
