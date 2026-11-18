import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { Colors } from '../../theme/colors';

const WelcomeWave = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 258 260" preserveAspectRatio="none" {...props}>
      <Path
        d="M0 0H258V90C238 92 228 118 205 128C170 142 150 160 120 195C95 225 50 258 0 258Z"
        fill={Colors.tealGreen}
      />
    </Svg>
  );
};

export default WelcomeWave;