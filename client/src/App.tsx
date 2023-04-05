import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
