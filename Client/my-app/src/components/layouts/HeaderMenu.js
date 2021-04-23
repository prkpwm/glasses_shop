import React from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
function HeaderMenu() {


  return (
    <div>
      {
        localStorage.getItem('role') == 1 ?
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[null]} style={{ textAlign: "right",backgroundColor: "#f0f2f5",color:"black" }}>
            <Menu.Item key="1"><Link to="/GlassesShop/AI"><stan style={{ color: "black" }}>AI</stan></Link></Menu.Item>
            <Menu.Item key="2"><Link to="/GlassesShop/Shopping"><stan style={{ color: "black",fontweight: "bold" }}>Shop</stan></Link></Menu.Item>
            <Menu.Item key="3"><Link to="/GlassesShop/Analysis"><stan style={{ color: "black",fontweight: "bold" }}>Dashboard</stan></Link></Menu.Item>
            <Menu.Item key="4"><Link to="/GlassesShop/Contact"><stan style={{ color: "black",fontweight: "bold" }}>Contact Us</stan></Link></Menu.Item>
          </Menu>
          : <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[null]} style={{ textAlign: "right",backgroundColor: "#f0f2f5" ,color:"black"  }}>
            <Menu.Item key="1"><Link to="/GlassesShop/AI"><stan style={{ color: "black",fontweight: "bold" }}>AI</stan></Link></Menu.Item>
            <Menu.Item key="2"><Link to="/GlassesShop/Shopping"><stan style={{ color: "black",fontweight: "bold" }}>Shop</stan></Link></Menu.Item>
            <Menu.Item key="3"><Link to="/GlassesShop/Analysis"><stan style={{ color: "black" ,fontweight: "bold"}}>Dashboard</stan></Link></Menu.Item>
          </Menu>
      }
    </div>
  );
}

export default HeaderMenu;
