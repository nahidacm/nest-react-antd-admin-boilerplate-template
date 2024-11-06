import React from "react";
import Icon from "@ant-design/icons";
import type { GetProps } from "antd";

type CustomIconComponentProps = GetProps<typeof Icon>;

const AddUser = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <title>AddUser icon</title>
    <path
     d="m 597.33334,682.66666 v -128 h 85.33333 v 128 h 128 V 768 h -128 V 896 H 597.33334 V 768 h -128 v -85.33334 z"
     id="path3"
     style={{ fill: "#00a99d", fillOpacity: 1 }} />
  <path
     d="M 341.33334,512 C 199.89334,512 85.333341,397.44 85.333341,256 85.333341,114.56 199.89334,0 341.33334,0 c 141.44,0 256,114.56 256,256 0,141.44 -114.56,256 -256,256 z"
     id="path2"
     style={{ fill: "#00a99d", fillOpacity: 1 }} />
  <path
     d="M 426.66667,565.41866 V 896 H 1.1027981e-5 A 341.33333,341.33333 0 0 1 426.66667,565.41866 Z"
     id="path1"
     style={{ fill: "#00a99d", fillOpacity: 1 }} />
  </svg>
);

const AddUserIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={AddUser} {...props} />
);

export default AddUserIcon;
