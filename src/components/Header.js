import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';

function Header({ location }){
    return(
        <Menu selectedKeys={[window.location.pathname]}  mode="horizontal" theme="dark" >
            <Menu.Item key="/">
                <Link to="/"><Icon type="home" />Home</Link>
            </Menu.Item>
            <Menu.Item key="/products">
                <Link to="/products"><Icon type="bars" />Products</Link>
            </Menu.Item>
        </Menu>
    );
}

export default Header;