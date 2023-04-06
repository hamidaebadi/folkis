import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='root-panel'>
        <Sidebar />
        
        <div className='child-panel'>
          <Outlet />
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
