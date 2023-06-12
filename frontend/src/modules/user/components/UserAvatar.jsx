import React from "react";
import { Avatar, List, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";

function UserAvatar() {
    const name = "User Full Name";
    const menu_items = <List className="user-menu">
        <List.Item>Profile</List.Item>
        <List.Item>Logout</List.Item>
    </List>
  return (
    
    <Popover placement="bottom" title={name} content={menu_items} trigger="click">
      <Avatar icon={<UserOutlined />} className="user-avatar" />
    </Popover>
  );
}

export default UserAvatar;
