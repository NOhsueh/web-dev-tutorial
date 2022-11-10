import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppsRoutes from './routes/AppsRoutes'
import PublicRoutes from './routes/PublicRoutes'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {PublicRoutes.map((route, index) => {
                    return (
                        <Route key={index} path={route.path} element={route.element} />
                    );
                })};
                {AppsRoutes.map((route, index) => {
                    return (
                        <Route key={index} path={route.path} element={route.element} />
                    );
                })};
            </Routes>
        </BrowserRouter>
    )
}