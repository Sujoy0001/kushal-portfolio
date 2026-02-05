import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Layout01 from './layout/Layout01.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout01 />,
    children: [
      { index: true, element: <App /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);