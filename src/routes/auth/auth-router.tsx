import { lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

import { AUTH_ROUTE_PATH } from '@auth-route/helpers'

const Layout = lazy(() => import('@/layout/auth'))
const Error = lazy(() => import('@/pages/error'))
const SignIn = lazy(() => import('@/pages/auth/sign-in'))
const SignUp = lazy(() => import('@/pages/auth/sign-up'))

export const AuthRouter = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: AUTH_ROUTE_PATH.SIGN_IN.PATH,
        element: <SignIn />,
      },
      {
        path: AUTH_ROUTE_PATH.SIGN_UP.PATH,
        element: <SignUp />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={AUTH_ROUTE_PATH.SIGN_IN.PATH} replace={true} />,
  },
])
