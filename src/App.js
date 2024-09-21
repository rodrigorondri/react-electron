import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Content from './components/layout/Content';
import './style/App.css'

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
