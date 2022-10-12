import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Clock from './pages/Clock'
import Calculator from './pages/Calculator'
import NotFound from './pages/NotFound'

export default function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/clock" element={<Clock />}></Route>
                        <Route path="/calculator" element={<Calculator />}></Route>
                        <Route path='*' element={<NotFound />}> </Route>
                    </Routes>
            </div>
        </BrowserRouter>
    )
}



