import * as React from 'react';
import Svg, { SvgProps, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
const SvgRain = (props: SvgProps) => (
  <Svg width={200} height={228} viewBox="0 0 200 228" fill="none" accessibilityRole="image" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M47.29 79.039C49.745 58.18 67.483 42 89 42c14.835 0 27.874 7.691 35.346 19.304A49.35 49.35 0 0 1 135.648 60C162.904 60 185 82.162 185 109.5S162.904 159 135.648 159h-82.58C30.94 159 13 141.007 13 118.812c0-20.227 14.899-36.964 34.29-39.773Z"
      fill="url(#rain_svg__a)"
    />
    <Path
      d="m44.362 185.266-7.623 15.248a5 5 0 1 0 8.944 4.472l7.624-15.248a5 5 0 1 0-8.945-4.472ZM94.865 185.266l-7.624 15.248a5 5 0 1 0 8.944 4.472l7.624-15.248a5 5 0 1 0-8.944-4.472ZM74.789 174.053l-7.624 15.248a5 5 0 1 0 8.944 4.472l7.624-15.248a5 5 0 1 0-8.944-4.472ZM125.291 174.053l-7.624 15.248a5 5 0 1 0 8.944 4.472l7.624-15.248a5 5 0 1 0-8.944-4.472ZM89.152 143.764l-7.624 15.248a5 5 0 1 0 8.944 4.472l7.624-15.248a5 5 0 1 0-8.944-4.472ZM140.152 143.764l-7.624 15.248a5 5 0 1 0 8.944 4.472l7.624-15.248a5 5 0 1 0-8.944-4.472ZM109.152 154.764l-7.624 15.248a5 5 0 1 0 8.944 4.472l7.624-15.248a5 5 0 1 0-8.944-4.472ZM59.152 154.764l-7.624 15.248a5 5 0 1 0 8.944 4.472l7.624-15.248a5 5 0 1 0-8.944-4.472Z"
      fill="#A8D9FF"
    />
    <Defs>
      <LinearGradient id="rain_svg__a" x1={13} y1={42} x2={13} y2={159} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#A9D9FF" />
        <Stop offset={1} stopColor="#7AC5FF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgRain;
