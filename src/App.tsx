import React from 'react';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/HomeSection/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
import { Education } from './Pages/EducationSection/Education';

function App() {
  return (
    <div className="App flex flex-col items-center">
      <Header/>
      <Home/>
      <AboutMe/>
      <Education/>
    </div>
  );
}

export default App;

