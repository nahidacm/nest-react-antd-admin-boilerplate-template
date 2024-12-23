import React, { useState, useEffect } from "react";
import { Descriptions, Spin } from "antd";
import axios from "axios";
import ChangePassword from "./ChangePassword";

function UserProfile() {
  const [userData, setUserData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("user/me").then((response) => {
      const data = [
        {
          key: "name",
          label: "Name",
          children: response.data.name,
        },
        {
          key: "username",
          label: "Username",
          children: response.data.username,
        },
        {
          key: "email",
          label: "Email",
          children: response.data.email,
        },
        {
          key: "role",
          label: "Role",
          children: response.data.role,
        },
        {
          key: "password",
          label: "Password",
          children: <ChangePassword userData={response.data} />,
        }
      ];

      setUserData(data);
    });
  }, []);

  return (
    <Spin spinning={loading}>
      <Descriptions items={userData} bordered column={1} />
    </Spin>
  );
}

export default UserProfile;
