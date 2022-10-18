import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home/Home'))
const Clock = lazy(() => import('./pages/Clock/Clock'))
const Calculator = lazy(() => import('./pages/Calculator/Calculator'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Suspense><Home /></Suspense>} />
                <Route path='/clock' element={<Suspense><Clock /></Suspense>} />
                <Route path='/calculator' element={<Suspense><Calculator /></Suspense>} />
                <Route path='*' element={<Suspense><NotFound /></Suspense>} />
            </Routes>
        </BrowserRouter>
    )
}



