import { lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

import { APP_ROUTE_PATH } from '@app-route/helpers'

const Layout = lazy(() => import('@/layout/app'))
const Error = lazy(() => import('@/pages/error'))
const Home = lazy(() => import('@/pages/app/home'))

export const AppRouter = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: APP_ROUTE_PATH.HOME.PATH,
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={APP_ROUTE_PATH.HOME.PATH} replace={true} />,
  },
])
