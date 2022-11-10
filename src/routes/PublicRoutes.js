import { lazy, Suspense } from 'react'

const Home = lazy(() => import('../pages/Home/Home'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound'))
const Login = lazy(() => import('../pages/Login/Login'))

const PublicRoutes = [
    {
        path: '/',
        element: <Suspense><Home /></Suspense>,
    },
    {
        path: '*',
        element: <Suspense><NotFound /></Suspense>,
    },
    {
        path: '/login',
        element: <Suspense><Login /></Suspense>,
    },
];

export default PublicRoutes;