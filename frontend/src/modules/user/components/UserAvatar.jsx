import React, {useState, useEffect} from "react";
import { Avatar, Button, List, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { logout } from "../userFunctions";
import axios from "axios";

function UserAvatar() {
  const [user, setuser] = useState(null);
  useEffect(() => {
    axios.get("/user/me").then(response=>{
      setuser(response.data)
    });
  }, [])
  
    // const name = "User Full Name";
    const menu_items = <List className="user-menu">
        <List.Item><Button type="link" href="/user/me">Profile</Button></List.Item>
        <List.Item onClick={logout}><Button type="link">Logout</Button></List.Item>
    </List>

  return (
    <Popover placement="bottom" title={user?.name} content={menu_items} trigger="click">
      <Avatar icon={<UserOutlined />} className="user-avatar" />
    </Popover>
  );
}

export default UserAvatar;
