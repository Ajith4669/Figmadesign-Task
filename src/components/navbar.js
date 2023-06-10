import React from "react";
import { AppstoreOutlined, UserOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Layout,
  Menu,
  Space,
  Tooltip,
  Avatar,
  Badge,
  Drawer,
  List,
} from "antd";
import "../App.css";

const { Header, Content, Sider } = Layout;

function Navbar() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");
  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider width={200} style={{ background: "white" }}>
          <Menu
            className="SideMenuVertical"
            mode="vertical"
            onClick={(item) => {
              navigate(item.key);
            }}
            items={[
              {
                label: "Dashboard",
                icon: <AppstoreOutlined />,
                key: "/tablepage",
              },
              <br></br>,
              {
                label: "Employee",
                icon: <UserOutlined />,
                key: "/preview",
              },
            ]}
          ></Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              backgroundColor: "#556ee6",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            <Space style={{ marginLeft: "auto" }}>
              <div className="navbar-items">
                <h1
                  style={{
                    color: "white",
                    marginRight: "1000px",
                    fontSize: "30px",
                  }}
                >
                  App Title
                </h1>
                <Tooltip placement="topLeft" title="Search">
                  <img src="../searchnormal1.svg" />
                </Tooltip>
                <hr />
                <Tooltip placement="topLeft" title="Notification">
                  <img src="../notification.svg" />
                </Tooltip>
                <Tooltip placement="topLeft" title="Settings">
                  <img src="../setting2.svg" />
                </Tooltip>
                <hr />
              </div>
              <Tooltip placement="topLeft" title="Logout">
                <Avatar src="../human.png"></Avatar>
              </Tooltip>

              <p style={{ color: "white", fontSize: "15px" }}> Super Admin</p>
            </Space>
          </Header>
          <Content
            style={{
              margin: "16px",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
export default Navbar;
