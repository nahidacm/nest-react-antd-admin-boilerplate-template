import React from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout, theme, Row, Col, ConfigProvider } from "antd";
import { useState, useEffect } from "react";
import UserAvatar from "../modules/user/components/UserAvatar";
import { Outlet } from "react-router-dom";
import LeftMenu from "./partials/LeftMenu";
import { UserProfileContext } from "../modules/common/context";
import axios from "axios";

const { Header, Sider, Content } = Layout;

function ProtectedLayout() {
  const [collapsed, setCollapsed] = useState(true);
  const [userProfile, setUserProfile] = useState({});
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    const collapsed_state = localStorage.getItem("collapsed") === "false" ? false : true;
    setCollapsed(collapsed_state);
    axios.get("/user/profile").then(response=>{
      setUserProfile(response.data)
    });
  }, []);

  function handleCollupsed(state: boolean) {
    const string_state = state === false ? 'false' : 'true';
    localStorage.setItem("collapsed", string_state);
    setCollapsed(state);
  }

  return (
    <UserProfileContext.Provider value={{ userProfile }}>
      <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#682d90',
          controlHeight: 40,
          fontSize: 15,
        },
        components: {
          Segmented: {
            // itemSelectedBg: '#00a99d',
          },
          Menu: {
            collapsedIconSize: 30,
            iconSize: 30,
          }
        },
      }}
    >
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light" width={250}>
        <div className="demo-logo-vertical" ></div>
        <LeftMenu/>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >

          <Row justify={"space-between"} style={{paddingRight: 24}}>
            <Col>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => handleCollupsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </Col>
            <Col>
              <UserAvatar />
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
    </ConfigProvider>
    </UserProfileContext.Provider>
  );
}

export default ProtectedLayout;
