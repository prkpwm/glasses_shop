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
import { Layout, Row, Col, Avatar, Space, Menu, Dropdown, Card, Button } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined,ShoppingCartOutlined } from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="0"><Link to="/GlassShop/Login">เข้าสู่ระบบ</Link></Menu.Item>
  </Menu>
);

const menu1 = (
  <Menu>
    <Menu.Item key="1">ตั้งค่าบัญชีผู้ใช้งาน</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" onClick={() => { localStorage.clear(); window.location.replace("/") }}>ออกจากระบบ</Menu.Item>
  </Menu>
);

function App() {
  return (
    <div>
      <Layout>
        <Header>
          <Row style={{ justifyContent: "space-between" }}>
            <Col style={{ color: "white" }}>
              <Link to="/GlassShop/Home">
                Glass Shop(หารูปแปะ คลิกแล้วไปหน้า Home)
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
                  <Link to="/GlassShop/Mycart">
                  <Avatar shape="square"  style={{color:"white",backgroundColor:"transparent"}}
                  icon={ < ShoppingCartOutlined style={{fontSize:20}}/>} size={30} />
                   
                    </Link>
                    <Dropdown overlay={localStorage.getItem('userdata')?menu1:menu} trigger={["click"]}
                      >
                      <a onClick={(e) => e.preventDefault()}>
                        <Avatar icon={<UserOutlined />} size={40} />
                        <span
                          style={{
                            padding: 10,
                            color: "white",
                          }}
                        >
                          {localStorage.getItem('userdata')}
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
              <Redirect to="/GlassShop/Home" />
            </Route>
            <Route exact path="/GlassShop/AI" component={AIhome} />
            <Route exact path="/GlassShop/Home" component={Home} />
            <Route exact path="/GlassShop/Shopping" component={ShopHome} />
            <Route exact path="/GlassShop/Contact" component={ContactusHome} />
            <Route exact path="/GlassShop/Mycart" component={Mycarthome} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          2021 © power by Glass Shop Group
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
