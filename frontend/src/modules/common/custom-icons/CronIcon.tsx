import React from "react";
import Icon from "@ant-design/icons";
import type { GetProps } from "antd";

type CustomIconComponentProps = GetProps<typeof Icon>;

const Cron = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 48 48">
    <title>Cron icon</title>
    <path
   d="m 20.867,24.263 1.485,-1.484 -2.693,-2.694 -1.484,1.486 c -0.864,-0.572 -1.828,-0.999 -2.858,-1.267 v -2.22 h -4.781 v 2.22 C 9.483,20.576 8.497,21.015 7.619,21.606 L 6.194,20.181 3.5,22.873 4.949,24.322 c -0.554,0.849 -0.97,1.793 -1.23,2.8 H 1.5 v 4.776 h 2.218 c 0.267,1.031 0.694,1.998 1.267,2.862 L 3.5,36.245 6.193,38.936 7.678,37.452 c 0.866,0.573 1.834,1.002 2.867,1.269 v 2.216 h 4.761 v -2.216 c 1.01,-0.26 1.957,-0.678 2.808,-1.231 l 1.544,1.543 2.693,-2.691 -1.521,-1.522 c 0.594,-0.883 1.034,-1.876 1.306,-2.934 h 2.215 v -4.747 h -2.215 c -0.265,-1.036 -0.693,-2.008 -1.269,-2.876 z m -7.941,9.165 c -2.163,0 -3.917,-1.754 -3.917,-3.917 0,-2.163 1.754,-3.917 3.917,-3.917 2.163,0 3.917,1.754 3.917,3.917 0,2.163 -1.754,3.917 -3.917,3.917 z"
   fill="#241F20"
   id="path1"
   style={{fill:"#00a99d", fillOpacity:1}} />

<polygon
   fill="#241f20"
   points="28.312,3.859 28.384,3.859 28.384,4.81 28.384,5.828 28.384,11.984 31.25,11.984 35.559,11.984 36.438,11.984 36.438,17.084 36.438,19.084 36.438,24 40.342,24 40.342,19.084 40.342,17.084 40.342,11.984 40.342,9.422 30.946,0.025 28.384,0.025 4.467,0.025 4.467,17.766 8.375,17.766 8.375,5.672 8.375,4.797 8.375,3.859 27.266,3.859 "
   id="polygon1" />

<path
   d="m 36.024,27.049 c -5.785,0 -10.476,4.69 -10.476,10.476 C 25.548,43.311 30.239,48 36.024,48 41.809,48 46.5,43.31 46.5,37.524 46.5,31.738 41.81,27.049 36.024,27.049 Z m 0.154,17.954 c -4.135,0 -7.486,-3.352 -7.486,-7.487 0,-4.135 3.352,-7.486 7.486,-7.486 4.136,0 7.487,3.352 7.487,7.486 0,4.135 -3.352,7.487 -7.487,7.487 z"
   fill="#241F20"
   id="path2"
   style={{fill:"#a91200", fillOpacity:1}} />

<polygon
   fill="#241F20"
   points="37.101,38.156 41.056,38.156 41.056,36.049 37.101,36.049 34.992,36.049 34.992,38.156 34.992,43.001 37.101,43.001 "
   id="polygon2"
   style={{fill:"#a91200", fillOpacity:1}} />
  </svg>
);

const CronIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={Cron} {...props} />
);

export default CronIcon;