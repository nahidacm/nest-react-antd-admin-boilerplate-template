import React from "react";
import { Menu } from "antd";
import {
  UserOutlined, ProfileOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const items = [
  {
    label: "Users",
    key: "users",
    icon: <UserOutlined />,
    children: [
      {
        label: <Link to={`user/list`}>User List</Link>,
        key: "user-list"
      },
      {
        label: <Link to={`user/create`}>Create User</Link>,
        key: "create-user"
      },
    ]
  },
];


function LeftMenu() {
  return (
    
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={items}
    />
  );
}

export default LeftMenu;
