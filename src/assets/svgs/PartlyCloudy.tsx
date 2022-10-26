import * as React from 'react';
import Svg, { SvgProps, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
const SvgPartlyCloudy = (props: SvgProps) => (
  <Svg width={200} height={208} viewBox="0 0 200 208" fill="none" accessibilityRole="image" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M126.81 21.59v12.998a3.075 3.075 0 0 0 6.15 0V21.59a3.075 3.075 0 0 0-6.15 0Zm2.767 59.59c11.039 0 19.988-8.949 19.988-19.988 0-11.038-8.949-19.987-19.988-19.987-11.038 0-19.987 8.949-19.987 19.988 0 11.038 8.949 19.987 19.987 19.987ZM89.974 63.345h12.999a3.075 3.075 0 1 0 0-6.15H89.974a3.075 3.075 0 0 0 0 6.15Zm79.271 0h-12.999a3.075 3.075 0 0 1 0-6.15h12.999a3.075 3.075 0 0 1 0 6.15ZM126.81 100.86V87.861a3.075 3.075 0 0 1 6.15 0v12.999a3.075 3.075 0 0 1-6.15 0ZM99.617 35.146l9.192 9.191a3.074 3.074 0 1 0 4.348-4.348l-9.191-9.192a3.076 3.076 0 0 0-4.35 4.349Zm56.053 56.053-9.192-9.192a3.075 3.075 0 1 1 4.349-4.349l9.191 9.192a3.075 3.075 0 1 1-4.348 4.349Zm-.661-59.967-9.191 9.191a3.075 3.075 0 1 0 4.348 4.35l9.192-9.193a3.075 3.075 0 1 0-4.349-4.348ZM98.956 87.285l9.192-9.192a3.075 3.075 0 0 1 4.349 4.349l-9.192 9.192a3.075 3.075 0 1 1-4.349-4.35Z"
      fill="url(#partly-cloudy_svg__a)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M47.29 87.039C49.745 66.18 67.483 50 89 50c14.835 0 27.874 7.691 35.346 19.304A49.35 49.35 0 0 1 135.648 68C162.904 68 185 90.162 185 117.5S162.904 167 135.648 167h-82.58C30.94 167 13 149.007 13 126.812c0-20.227 14.899-36.964 34.29-39.773Z"
      fill="url(#partly-cloudy_svg__b)"
    />
    <Defs>
      <LinearGradient
        id="partly-cloudy_svg__a"
        x1={86.899}
        y1={18.514}
        x2={86.899}
        y2={103.935}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFFCC9" />
        <Stop offset={1} stopColor="#FFF799" />
      </LinearGradient>
      <LinearGradient
        id="partly-cloudy_svg__b"
        x1={13}
        y1={50}
        x2={13}
        y2={167}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#A9D9FF" />
        <Stop offset={1} stopColor="#7AC5FF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgPartlyCloudy;
