import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './routes/home.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import './index.css'
import RootLayout from './routes/root.tsx'
import ErrorPage from './error-page.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  },
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
