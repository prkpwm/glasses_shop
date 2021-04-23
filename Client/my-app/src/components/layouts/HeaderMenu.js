import React from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

function HeaderMenu() {


  return (
    <div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[null]} style={{ textAlign: "right" }}>
        <Menu.Item key="1"><Link to="/GlassesShop/AI">AI</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/GlassesShop/Shopping">Shop</Link></Menu.Item>
        {localStorage.getItem('role') == 1 ? <Menu.Item key="3"><Link to="/GlassesShop/Analysis">Dashboard</Link></Menu.Item>
          : null}
        <Menu.Item key="4"><Link to="/GlassesShop/Contact">Contact Us</Link></Menu.Item>
      </Menu>
    </div>
  );
}

export default HeaderMenu;
