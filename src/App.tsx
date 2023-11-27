import { Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import { RouterProvider } from 'react-router-dom'

import i18n from '@/i18n'

import { Loader } from './components'
import AppRouter from './routes/app'
import AuthRouter from './routes/auth'

import './app.css'

const App = () => {
  const isAuthenticated = true

  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<Loader type="fallback" />}>
        <RouterProvider router={isAuthenticated ? AppRouter : AuthRouter} />
      </Suspense>
    </I18nextProvider>
  )
}

export default App
