import './App.css';
import HeaderMenu from './components/layouts/HeaderMenu.js'
import { BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import AIhome from './components/pages/AI/AIhome.js'
import Home from './components/pages/Home/Home'
import ShopHome from './components/pages/Shop/ShopHome'
import ContactusHome from './components/pages/Contactus/ContactusHome'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div >
    <Layout>
      <Header>
      <HeaderMenu/>
      </Header>
      <Content>
      <div>
      <Route exact path="/GlassShop/AI" component={AIhome}/>
      <Route exact path="/GlassShop/Home" component={Home}/>
      <Route exact path="/GlassShop/Shopping" component={ShopHome}/>
      <Route exact path="/GlassShop/Contact" component={ContactusHome}/>
      </div>
      </Content>
      <Footer style={{textAlign:"center"}}>2021 © power by Glass Shop Group</Footer>
    </Layout>
      
    </div>
  );
}

export default App;
