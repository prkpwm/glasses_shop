import React, { useEffect, useState} from 'react';
import HeaderMenu from "./components/layouts/HeaderMenu.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AIhome from "./components/pages/AI/AIhome.js";
import Home from "./components/pages/Home/Home";
import ShopHome from "./components/pages/Shop/ShopHome";
import ContactusHome from "./components/pages/Contactus/ContactusHome";
import Mycarthome from "./components/pages/Mycart/Mycarthome";
import Pay from "./components/pages/Mycart/Pay";
import Profile from "./components/pages/UserInfo/Profile";
import RegisterHome from "./components/pages/Register/RegisterHome";
import AnalysisHome from "./components/pages/Analysis/AnalysisHome";
import axios from 'axios';

import { Layout, Row, Col, Avatar, Space, Menu, Dropdown, Tag, Button, Grid } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="0"><Link to="/GlassesShop/Login">เข้าสู่ระบบ</Link></Menu.Item>
    <Menu.Item key="1"><Link to="/GlassesShop/Register">สมัครสมาชิก</Link></Menu.Item>
  </Menu>
);

const menu1 = (
  <Menu>
    <Menu.Item key="1">
      <Link to="/GlassesShop/Profile">โปรไฟล์</Link></Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" onClick={() => { localStorage.clear(); window.location.replace("/") }}>ออกจากระบบ</Menu.Item>
  </Menu>
);

const { useBreakpoint } = Grid;
var countcreen = ""
var id = null
function App() {
  const screens = useBreakpoint();

  useEffect( () => {
    if (localStorage.getItem('isLogin') == "true") {
        id = localStorage.getItem('uid')
    }
    else if (localStorage.getItem('isLogin') == "false"){
        id = sessionStorage.getItem('uid')
    }
    if(id!=null){
      axios.get("/getinfobyid/userinfo/id/" + id)
        .then(res => {
            const data = res.data[0];
            console.log(data)
            sessionStorage.setItem('nameshow',data[3])
        })
    }
    

  }, [])
  return (
    <div>
      {Object.entries(screens)
        .filter(screen => !!screen[1])
        .map(screen => { countcreen = screen[0] })}
      <Layout>
        <Header style={{ backgroundColor: "#EAECEE" }}>
          <Row style={{ justifyContent: "space-between" }}>
            <Col>
              <Link to="/GlassesShop/Home">
                <img
                  src="http://localhost:3000/logo8.png"
                  alt="glasses!!"
                  width={countcreen != "xs" ? "160" : "100"}
                  height="auto"
                />
              </Link>
            </Col>
            <Col>
              <Row>
                <Space>
                  <Col>
                    <HeaderMenu />
                  </Col>
                  <Col>
                    <Space>
                      <Link to="/GlassesShop/Mycart">
                        <Avatar shape="square" style={{ color: "white", backgroundColor: "transparent" }}
                          icon={< ShoppingCartOutlined style={{ fontSize: countcreen != "xs" ? 30 : 20, Align: "justify", color: "#424949" }} />} size={countcreen != "xs" ? 50 : 40} />
                      </Link>

                      <Dropdown overlay={localStorage.getItem('userdata') || sessionStorage.getItem('userdata')
                        ? menu1 : menu} trigger={["click"]}
                      >

                        <a onClick={(e) => e.preventDefault()}>
                          {localStorage.getItem('userdata') || sessionStorage.getItem('userdata') ?
                            <Avatar src={"/loadimages/" + localStorage.getItem('path')} size={40} /> :
                            <Avatar icon={<UserOutlined size={40} />} />
                          }
                          {countcreen != "xs" &&
                            <span
                              style={{
                                padding: 10,
                                color: "#424949",
                              }}
                            >
                              { sessionStorage.getItem('nameshow') }
                            </span>}
                        </a>
                      </Dropdown>
                    </Space>
                  </Col>
                </Space>
              </Row>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: "0px 0px",
            padding: 24,
            minHeight: 490,
            background: "white",
            overflow: "hidden",
          }}
        >
          <div>
            <Route exact path="/">
              <Redirect to="/GlassesShop/Home" />
            </Route>
            <Route exact path="/GlassesShop/Register" component={RegisterHome} />
            
            <Route exact path="/GlassesShop/AI" component={AIhome} >
              { (localStorage.getItem('uid') == null) ? <Redirect to="/GlassesShop/Login" /> : null}
            </Route>
            <Route exact path="/GlassesShop/Home" component={Home} />
            <Route exact path="/GlassesShop/Shopping" component={ShopHome} >
              { (localStorage.getItem('uid') == null) ? <Redirect to="/GlassesShop/Login" /> : null}
            </Route>
            <Route exact path="/GlassesShop/Contact" component={ContactusHome} >
              {(localStorage.getItem('uid') == null) ? <Redirect to="/GlassesShop/Login" /> : null}
            </Route>
            <Route exact path="/GlassesShop/Mycart" component={Mycarthome} >
              { (localStorage.getItem('uid') == null) ? <Redirect to="/GlassesShop/Login" /> : null}
            </Route>
            <Route exact path="/GlassesShop/Profile" component={Profile} >
              { (localStorage.getItem('uid') == null) ? <Redirect to="/GlassesShop/Login" /> : null}
            </Route>
            <Route exact path="/GlassesShop/Pay" component={Pay} >
              { (localStorage.getItem('uid') == null) ? <Redirect to="/GlassesShop/Login" /> : null}
            </Route>
            <Route exact path="/GlassesShop/Analysis" component={AnalysisHome} >
              { (localStorage.getItem('uid') == null) ? <Redirect to="/GlassesShop/Login" /> : localStorage.getItem('role') != 1 ? <Redirect to="/GlassesShop/Login" /> : null}
            </Route>
          </div>
        </Content>
        <footer style={{
          textAlign: "center",
          padding: " 24px 50px",
          color: "rgba(0, 0, 0, 0.85)",
          fontSize: 14,
          backgroundColor: "#f0f2f5"
        }}>
          2021 © power by Glasses Shop Group
        </footer>
      </Layout>
    </div>
  );
}

export default App;
