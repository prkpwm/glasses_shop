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
import { Layout, Row, Col, Avatar, Space, Menu, Dropdown, Card, Button } from "antd";
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

function App() {
  return (
    <div>
      <Layout>
        <Header style ={{backgroundColor: "#f0f2f5"}}>
          <Row style={{ justifyContent: "space-between" }}>
            <Col>
              <Link to="/GlassesShop/Home">

                <img
                  src="http://localhost:3000/logo8.png"
                  alt="glasses!!"
                  width="160"
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
                          icon={< ShoppingCartOutlined style={{ fontSize: 30 ,Align: "justify",color:"#424949"}} />} size={50}/>

                      </Link>

                      <Dropdown overlay={localStorage.getItem('userdata') || sessionStorage.getItem('userdata')
                        ? menu1 : menu} trigger={["click"]}
                      >

                        <a onClick={(e) => e.preventDefault()}>
                          {localStorage.getItem('userdata') || sessionStorage.getItem('userdata') ?
                            <Avatar src={"/loadimages/"+localStorage.getItem('path')} size={40} /> :
                            <Avatar icon={<UserOutlined size={40} />} />
                          }
                          <span
                            style={{
                              padding: 10,
                              color: "#424949",
                            }}
                          >
                            {localStorage.getItem('isLogin') == "true" ? localStorage.getItem('userdata') : sessionStorage.getItem('userdata')}
                          </span>
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
            <Route exact path="/GlassesShop/AI" component={AIhome} />
            <Route exact path="/GlassesShop/Home" component={Home} />
            <Route exact path="/GlassesShop/Shopping" component={ShopHome} />
            <Route exact path="/GlassesShop/Analysis" component={AnalysisHome} />
            <Route exact path="/GlassesShop/Contact" component={ContactusHome} />
            <Route exact path="/GlassesShop/Mycart" component={Mycarthome} />
            <Route exact path="/GlassesShop/Profile" component={Profile} />
            <Route exact path="/GlassesShop/Pay" component={Pay} />
            <Route exact path="/GlassesShop/Register" component={RegisterHome} />
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
