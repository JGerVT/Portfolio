import React from 'react';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/HomeSection/Home';
import AboutMe from './Pages/AboutMe/AboutMe';

function App() {
  return (
    <div className="App flex flex-col items-center">
      <Header/>
      <Home/>
      <AboutMe/>
      <div className='flex w-full min-h-[600px] bg-[#101219]'>

      </div>
    </div>
  );
}

export default App;
