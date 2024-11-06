import React, { useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Form, Input, Row, Card, message, ConfigProvider } from "antd";
import "../User.css";
import axios from "axios";
import checkAuth from '../../../app/auth.js'

const UserLogin = () => {

  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = (values) => {
    axios.post('/auth/login', values)
      .then(function (response) {
        localStorage.setItem("token", response.data.access_token);
        window.location.href = "/";
      })
      .catch(function (error) {
        const error_message = error.response?.data?.message ? error.response?.data?.message : "Something went wrong";
        messageApi.open({
          type: 'error',
          content: error_message,
        });
      });
  };

  useEffect(() => {
    const token = checkAuth();
    if (token) {
      window.location.href = "/";
    }
  }, [])

  return (
    <div id="login-module">
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: '#682d90',
            controlHeight: 40,
            fontSize: 15,
          },
        }}
      >
        {contextHolder}
        <Row justify={"center"}>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Card>
              <div style={{ textAlign: "center" }}><img alt="ecp-logo" src="/epic-labs-23-logo.svg" height={75} /></div>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </ConfigProvider>
    </div>
  );
};
export default UserLogin;
