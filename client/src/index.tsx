import React from 'react';
import {createRoot} from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './main.css';

import App from './App';
import Error from './pages/Error';
import DashboardPage from './pages/Dashboard';
import Workers from './pages/Workers';
import ShiftSheets from './pages/ShiftSheets';
import Settings from './pages/Settings';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />
      },
      {
        path: "workers",
        element: <Workers />
      },
      {
        path: "shift-sheets",
        element: <ShiftSheets />
      },
      {
        path: "settings",
        element: <Settings />
      },
      {
        path: "my-profile",
        element: <Profile />
      }
    ]
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
