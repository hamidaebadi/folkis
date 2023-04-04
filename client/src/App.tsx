import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
