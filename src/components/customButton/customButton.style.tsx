import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { hp, wp } from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(52),
    borderRadius: wp(10),
    backgroundColor: Colors.tealGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
