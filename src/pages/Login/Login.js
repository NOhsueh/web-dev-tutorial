import { LockOutlined, UserOutlined, SmileOutlined, FrownOutlined } from '@ant-design/icons';
import { Button, Form, Input, notification } from 'antd';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Navigation from '../../components/Header/Navigation';
import axios from 'axios';
axios.defaults.baseURL = 'http://43.143.171.145:8080';

const Login = () => {
    useEffect(() => {
        document.title = '登录';
        return () => document.title = 'Nohsueh';
    }, []);
    const openNotification = (check) => {
        if (check === true) {
            notification.open({
                message: 'Login successful',
                description:
                    'Welcome!',
                icon: (
                    <SmileOutlined
                        style={{
                            color: '#108ee9',
                        }}
                    />

                ),
            });
        }
        else if (check === false) {
            notification.open({
                message: 'Login failed',
                description:
                    'Check your username or password.',
                icon: (
                    <FrownOutlined
                        style={{
                            color: '#c92d0a',
                        }}
                    />
                ),
            });
        }
        else {
            notification.open({
                message: 'Error',
                description:
                    check,
                icon: (
                    <FrownOutlined
                        style={{
                            color: '#c92d0a',
                        }}
                    />
                ),
            });
        }
    };
    const onFinish = (values) => {
        axios.get('/login', {
            params: {
                username: values.username,
                password: values.password,
            }
        })
            .then(function (response) {
                openNotification(response.data);
            })
            .catch(function (error) {
                console.log(error);
                openNotification(error.message);
            })
            .then(function () {
                // 总是会执行
            });
    };
    return (
        <div>
            <Navigation />
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Log in
                    </Button>
                    New to Here? <Link to='/register'>register now!</Link>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Login;