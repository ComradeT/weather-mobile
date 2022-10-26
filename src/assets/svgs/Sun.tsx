import * as React from 'react';
import Svg, { SvgProps, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
const SvgSun = (props: SvgProps) => (
  <Svg width={200} height={200} viewBox="0 0 200 200" fill="none" accessibilityRole="image" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M94 35.104v21.137a5 5 0 0 0 10 0V35.104a5 5 0 0 0-10 0ZM98.5 132c17.949 0 32.5-14.551 32.5-32.5C131 81.55 116.449 67 98.5 67 80.55 67 66 81.55 66 99.5c0 17.949 14.55 32.5 32.5 32.5Zm-64.396-29h21.137a5 5 0 0 0 0-10H34.104a5 5 0 1 0 0 10ZM163 103h-21.137a5 5 0 0 1 0-10H163a5 5 0 0 1 0 10Zm-69 61v-21.137a5 5 0 0 1 10 0V164a5 5 0 0 1-10 0ZM49.783 57.147 64.73 72.093a5 5 0 1 0 7.071-7.07L56.855 50.075a5 5 0 1 0-7.072 7.071Zm91.143 91.143-14.946-14.945a5.002 5.002 0 0 1 0-7.072 5.002 5.002 0 0 1 7.072 0l14.945 14.946a5 5 0 0 1 0 7.071 5 5 0 0 1-7.071 0Zm-1.073-97.506-14.946 14.945a5 5 0 1 0 7.071 7.071l14.946-14.945a5.001 5.001 0 0 0-7.071-7.072ZM48.71 141.925l14.945-14.945a5 5 0 1 1 7.072 7.071L55.78 148.997a5 5 0 1 1-7.071-7.071Z"
      fill="url(#sun_svg__a)"
    />
    <Defs>
      <LinearGradient
        id="sun_svg__a"
        x1={29.104}
        y1={30.104}
        x2={29.104}
        y2={169}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFFCC9" />
        <Stop offset={1} stopColor="#FFF799" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgSun;
