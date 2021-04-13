import React from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

function HeaderMenu() {
  return (
    <div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{textAlign:"right"}}>
        <Menu.Item key="1"><Link to="/GlassShop/AI">AI</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/GlassShop/Shopping">Shop</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/GlassShop/Contact">Contact Us</Link></Menu.Item>
      </Menu>
    </div>
  );
}

export default HeaderMenu;
