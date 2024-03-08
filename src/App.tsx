import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Homepage'; 
import Navbar from './Navbar';

const App: React.FC = () => {
  return (
    <div> 
      <HomePage />
      <Navbar/>
      
    </div>
  );
}



export default App;
