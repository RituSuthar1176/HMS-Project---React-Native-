import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { hp, wp, screenWidth } from '../../utils/responsive';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  wave: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: screenWidth,
    height: screenWidth,
    zIndex: 0,
  },

  safeArea: {
    flex: 1,
  },

  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 2,
    overflow: 'visible',
  },

  image: {
    width: wp(430),
    height: hp(550),
    resizeMode: 'contain',
    transform: [{ translateY: hp(20) }],
  },

  content: {
    paddingHorizontal: wp(20),
    paddingTop: 0,
    paddingBottom: hp(16),
    alignItems: 'center',
    zIndex: 3,
  },

  centerText: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 22,
    color: '#292832',
  },

  description: {
    marginTop: hp(8),
    paddingHorizontal: wp(24),
    textAlign: 'center',
    fontSize: 15,
    lineHeight: hp(18),
    fontWeight: '800',
    color: '#A6A4AE',
  },

  button: {
    marginTop: hp(30),
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(28),
  },

  register: {
    marginLeft: wp(6),
  },
});

export default styles;
