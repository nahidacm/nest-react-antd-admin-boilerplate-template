import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import UserIcon from "../../modules/common/custom-icons/UserIcon";
import UsersIcon from "../../modules/common/custom-icons/UsersIcon";
import AddUserIcon from "../../modules/common/custom-icons/AddUserIcon";

const items = [
  {
    label: <Link to={`/`}>Dashboard</Link>,
    key: "dashboard",
    icon: <img alt="ecp-icon" src="/epic-labs-23-icon.svg" width="24" />
  },
  {
    label: "Users",
    key: "users",
    icon: <UserIcon />,
    children: [
      {
        label: <Link to={`user/list`}>All Users</Link>,
        key: "all-users",
        icon: <UsersIcon />
      },
      {
        label: <Link to={`user/create`}>Add New</Link>,
        key: "add-new-user",
        icon: <AddUserIcon />
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
