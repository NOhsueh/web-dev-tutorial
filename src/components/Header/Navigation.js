import { HomeOutlined, AppstoreOutlined, LoginOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css'

const items = [
  {
    label: (
      <Link to='/'>Home</Link>
    ),
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: 'Appstore',
    key: 'apps',
    icon: <AppstoreOutlined />,
    children: [
      {
        label: (
          <Link to='/clock'>Clock</Link>
        ),
        key: '/clock',
      },
      {
        label: (
          <Link to='/calculator'>Calculator</Link>
        ),
        key: '/calculator',
      },
      {
        label: (
          <Link to='/photoviewer'>PhotoViewer</Link>
        ),
        key: '/photoviewer',
      },
      {
        label: (
          <Link to='/linkage'>Linkage</Link>
        ),
        key: '/linkage',
      },
    ],
  },
  {
    label: (
      <Link to='/login'>Login</Link>
    ),
    key: '/login',
    icon: <LoginOutlined />,
  },
  {
    label: (
      <Link to='/register'>Register</Link>
    ),
    key: '/register',
  },
];
const Navigation = () => {
  const location = useLocation();
  return <Menu selectedKeys={location.pathname} mode="horizontal" items={items} />;
};
export default Navigation;