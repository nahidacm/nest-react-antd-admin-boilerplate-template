import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Popover, List } from "antd";

function UserAvatar() {
    
  const userMenu = () => {
    return (
      <List
        size="small"
        className="user-menu"
      >
        <List.Item>Name</List.Item>
        <List.Item>Logout</List.Item>
      </List>
    );
  };

  return (
    <>
      <Popover
        placement="bottom"
        title={<span>The Name</span>}
        content={userMenu}
        trigger="click"
      >
        <Avatar icon={<UserOutlined />} />
      </Popover>
    </>
  );
}

export default UserAvatar;
