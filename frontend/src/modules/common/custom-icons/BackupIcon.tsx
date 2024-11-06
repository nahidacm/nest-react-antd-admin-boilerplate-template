import React from "react";
import Icon from "@ant-design/icons";
import type { GetProps } from "antd";

type CustomIconComponentProps = GetProps<typeof Icon>;

const Backup = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 60 59.997827">
    <title>Backup icon</title>
    <path
      d="m 48,13.997829 a 11.9,11.9 0 0 0 -4.149,0.74 16.992,16.992 0 0 0 -33.59,-0.614 11.992,11.992 0 0 0 -1.261,23.474 v 4.4 a 2,2 0 0 0 2,2 h 11 v 4 H 8 v 4 h 14 v 4 H 8 v 4 h 16 a 2,2 0 0 0 2,-2 v -14 h 8 v 14 a 2,2 0 0 0 2,2 h 16 v -4 H 38 v -4 h 14 v -4 H 38 v -4 h 11 a 2,2 0 0 0 2,-2 v -4.4 a 11.992,11.992 0 0 0 -3,-23.6 z m -1,26 H 13 v -12 h 34 z m 4,-6.589 v -7.411 a 2,2 0 0 0 -2,-2 H 11 a 2,2 0 0 0 -2,2 v 7.411 a 8,8 0 0 1 2.948,-15.411 h 0.1 a 2,2 0 0 0 2,-1.868 12.991,12.991 0 0 1 25.952,0.868 c 0,0.261 -0.02,0.517 -0.038,0.772 l -0.01,0.142 a 2,2 0 0 0 3.208,1.73 7.914,7.914 0 0 1 4.84,-1.644 8,8 0 0 1 3,15.411 z"
      id="path1"
    />
    <rect height="4" width="4" x="0" y="55.997829" id="rect1" />
    <rect height="4" width="4" x="0" y="47.997829" id="rect2" />
    <rect height="4" width="4" x="17" y="31.997829" id="rect3" />
    <rect
      height="4"
      width="18"
      x="25"
      y="31.997829"
      id="rect4"
      style={{ fill: "#00a99d", fillOpacity: 1 }}
    />
    <rect height="4" width="4" x="56" y="55.997829" id="rect5" />
    <rect height="4" width="4" x="56" y="47.997829" id="rect6" />
  </svg>
);

const BackupIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={Backup} {...props} />
);

export default BackupIcon;
