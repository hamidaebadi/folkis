import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
