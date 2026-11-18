import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { fs } from '../../utils/responsive';

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Lexend-Medium',
    fontSize: fs(30),
    color: Colors.black,
  },
  title: {
    fontFamily: 'Lexend-Bold',
    fontSize: fs(22),
    color: Colors.charcoal,
  },
  label: {
    fontFamily: 'Lexend-Regular',
    fontSize: fs(13),
    color: Colors.black,
  },
  body: {
    fontFamily: 'Lexend-Regular',
    fontSize: fs(13),
    lineHeight: fs(20),
    color: Colors.darkGray,
  },
  button: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: fs(15),
    color: Colors.white,
  },
  link: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: fs(14),
    color: Colors.tealGreen,
  },
  caption: {
    fontFamily: 'Lexend-Regular',
    fontSize: fs(13),
    color: Colors.darkGray,
  },
});

export default styles;
