import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest} // 结构传过来的剩余参数
            render={(props) => {
                let token = localStorage.getItem('token') // 获取token
                if (!token) {  // 判断是否有 token ,没有 token 时
                    return (
                        <Redirect
                            to={{
                                pathname: '/login', // 跳到 登录页面
                                state: {
                                    from: props.location.pathname  // 获取在地址栏手动输入的地址
                                }
                            }}
                        >
                        </Redirect>
                    )
                }
                // 有 token 时，直接渲染该组件
                return <Component {...props}></Component>
            }}
        >
        </Route>
    )
}
export default AuthRoute;