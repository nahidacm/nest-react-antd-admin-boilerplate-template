import React, { useState, useEffect } from "react";
import { Button, Input, notification, Space } from "antd";
import axios from "axios";

function ChangePassword({ userData }: any) {
  const [formVisible, setFormVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function updatePassword() {
    setLoading(true);
    await axios
      .put(`user/password`, { password: newPassword })
      .then(function (response) {
        notification.success({
          message: "Success",
          description: "Password updated successfully",
        })
      })
      .catch(function (error) {
        console.log(error);
        notification.error({
          message: "Error",
          description: "Something went wrong",
        })
      });
    setLoading(false);
    setFormVisible(false);
  }
  return (
    <Space direction="vertical">
      <Button type="link" onClick={() => setFormVisible(!formVisible)}>
        Change Password
      </Button>
      {formVisible && (
        <Space>
          <Input.Password
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Button type="primary" onClick={updatePassword} loading={loading}>
            Update
          </Button>
        </Space>
      )}
    </Space>
  );
}

export default ChangePassword;
