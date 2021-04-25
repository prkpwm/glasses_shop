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
function App() {
  const screens = useBreakpoint();
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
                      <Link to={localStorage.getItem('isLogin') == "true" ? "/GlassesShop/Mycart" : "/GlassesShop/login"}>
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
                              {localStorage.getItem('isLogin') == "true" ? localStorage.getItem('userdata') : sessionStorage.getItem('userdata')}
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
            <Route exact path={localStorage.getItem('isLogin') == "true" ? "/GlassesShop/AI" : "/GlassesShop/login"} component={AIhome} />
            <Route exact path="/GlassesShop/Home" component={Home} />
            <Route exact path={localStorage.getItem('isLogin') == "true" ? "/GlassesShop/Shopping" : "/GlassesShop/login"} component={ShopHome} />
            <Route exact path={localStorage.getItem('isLogin') == "true" ? "/GlassesShop/Analysis" : "/GlassesShop/login"} component={AnalysisHome} />
            <Route exact path={localStorage.getItem('isLogin') == "true" ? "/GlassesShop/Contact" : "/GlassesShop/login"} component={ContactusHome} />
            <Route exact path={localStorage.getItem('isLogin') == "true" ? "/GlassesShop/Mycart" : "/GlassesShop/login"} component={Mycarthome} />
            <Route exact path={localStorage.getItem('isLogin') == "true" ? "/GlassesShop/Profile" : "/GlassesShop/login"} component={Profile} />
            <Route exact path={localStorage.getItem('isLogin') == "true" ? "/GlassesShop/Pay" : "/GlassesShop/login"} component={Pay} />
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
