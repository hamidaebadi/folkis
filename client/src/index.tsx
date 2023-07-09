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
import MaterialsPage from './pages/MaterialsPage';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />} >
    <Route>
      <Route path='materials/' element={<MaterialsPage />}/>
      <Route path=':id' />
    </Route>
    
  </Route>

))

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
