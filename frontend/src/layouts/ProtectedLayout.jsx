import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Row, Col } from "antd";
import { useState } from "react";
import UserAvatar from "../modules/user/components/UserAvatar";
import { Outlet } from "react-router-dom";
import LeftMenu from "./partials/LeftMenu";

const { Header, Sider, Content } = Layout;

function ProtectedLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
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
                onClick={() => setCollapsed(!collapsed)}
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
  );
}

export default ProtectedLayout;
