import { HomeOutlined, SettingOutlined, AppstoreOutlined, GithubOutlined } from '@ant-design/icons';
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
    label: 'Setting',
    key: 'set',
    icon: <SettingOutlined />,
    disabled: true,
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
    ],
  },
  {
    label: (
      <a href='https://github.com/NOhsueh' target='_blank' rel='noopener noreferrer'>
        Github
      </a>
    ),
    key: 'github',
    icon: <GithubOutlined />,
  },
];
const Navigation = () => {
  const location = useLocation();
  return <Menu selectedKeys={location.pathname} mode="horizontal" items={items} />;
};
export default Navigation;