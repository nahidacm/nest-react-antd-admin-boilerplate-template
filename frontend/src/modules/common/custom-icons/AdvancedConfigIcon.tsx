import React from "react";
import Icon from "@ant-design/icons";
import type { GetProps } from "antd";

type CustomIconComponentProps = GetProps<typeof Icon>;

const AdvancedConfig = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 48 48">
    <title>AdvancedConfig icon</title>
    <path
      d="M 24,48 V 40 C 15.164,40 8,32.836 8,24 8,15.163 15.164,8 24,8 V 0 H 18.979 V 4.661 C 16.767,5.234 14.695,6.155 12.85,7.396 L 9.857,4.402 4.201,10.059 7.243,13.101 C 6.08,14.885 5.207,16.867 4.66,18.984 H 0 v 10.032 h 4.66 c 0.56,2.164 1.458,4.192 2.66,6.008 l -3.118,3.119 5.656,5.655 3.119,-3.118 c 1.819,1.205 3.853,2.104 6.023,2.664 V 48 Z"
      fill="#241F20"
      id="path1"
      style={{ fill: "#00a99d", fillOpacity: 1 }}
    />

    <path
      d="m 24,29 c -2.762,0 -5,-2.238 -5,-5 0,-2.761 2.238,-5 5,-5 v -4 c -4.971,0 -9,4.029 -9,9 0,4.971 4.029,9 9,9 z"
      fill="#241F20"
      id="path2"
      style={{ fill: "#a90700", fillOpacity: 1 }}
    />

    <path
      d="M 36.218,48 V 37.129 C 43.188,33.699 48,26.547 48,18.253 48,10.436 43.729,3.629 37.402,0 V 17.741 L 26.955,26.902 V 48 Z"
      fill="#241F20"
      id="path3"
      style={{ fill: "#00a99d", fillOpacity: 1 }}
    />
  </svg>
);

const AdvancedConfigIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={AdvancedConfig} {...props} />
);

export default AdvancedConfigIcon;