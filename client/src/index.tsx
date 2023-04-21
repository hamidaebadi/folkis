import React from 'react';
import {createRoot} from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './main.css';

import App from './App';
import Error from './pages/Error';
import DashboardPage from './pages/Dashboard';
import Workers from './pages/Workers/Workers';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import ShiftSheets from './pages/ShiftSheets/ShiftSheets';
import ListView from './pages/ShiftSheets/ListView';
import ShiftView from './pages/ShiftSheets/ShiftView';
import WorkersList from './pages/Workers/WorkersList';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />} errorElement={<Error />}>
    <Route path='dashboard' element={<DashboardPage />}/>
    <Route path='workers' element={<Workers />}>
      <Route path='' element={<WorkersList />}/>
    </Route>
    <Route path='shift-sheets' element={<ShiftSheets />}>
      <Route path='' element={<ListView />}/>
      <Route path='view/:id' element={<ShiftView />}/>
    </Route>
    <Route path='settings' element={<Settings />}/>
    <Route path='my-profile' element={<Profile />}/>
  </Route>

))

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
