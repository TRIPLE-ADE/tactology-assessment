import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface CalendarIconProps {
  size?: number;
  color?: string;
}

export const CalendarIcon: React.FC<CalendarIconProps> = ({ size = 16, color = '#009AFF' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 15" fill="none">
      <Path
        d="M10.8333 0.5V1.83333M2.83334 0.5V1.83333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.83036 7.83331H6.83634M6.83036 10.5H6.83634M9.49404 7.83331H9.50002M4.16669 7.83331H4.17267M4.16669 10.5H4.17267"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M0.5 7.32882C0.5 4.42395 0.5 2.97151 1.33475 2.06908C2.16949 1.16666 3.51299 1.16666 6.2 1.16666H7.46667C10.1537 1.16666 11.4972 1.16666 12.3319 2.06908C13.1667 2.97151 13.1667 4.42395 13.1667 7.32882V7.67116C13.1667 10.576 13.1667 12.0285 12.3319 12.9309C11.4972 13.8333 10.1537 13.8333 7.46667 13.8333H6.2C3.51299 13.8333 2.16949 13.8333 1.33475 12.9309C0.5 12.0285 0.5 10.576 0.5 7.67116V7.32882Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M0.833344 4.5H12.8333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

