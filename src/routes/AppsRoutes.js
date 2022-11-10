import { lazy, Suspense } from 'react'

const Clock = lazy(() => import('../pages/Apps/Clock/Clock.js'))
const Calculator = lazy(() => import('../pages/Apps/Calculator/Calculator.js'))
const PhotoViewer = lazy(() => import('../pages/Apps/PhotoViewer/PhotoViewer.js'))
const Linkage = lazy(() => import('../pages/Apps/Linkage/Linkage.js'))
const AppsRoutes = [
    {
        path: '/clock',
        element: <Suspense><Clock /></Suspense>,
    },
    {
        path: '/calculator',
        element: <Suspense><Calculator /></Suspense>,
    },
    {
        path: '/photoviewer',
        element: <Suspense><PhotoViewer /></Suspense>,
    },
    {
        path: '/linkage',
        element: <Suspense><Linkage /></Suspense>,
    },
];

export default AppsRoutes;