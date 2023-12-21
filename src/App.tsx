import React from 'react';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/HomeSection/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
import { Education } from './Pages/EducationSection/Education';
import Skills from './Pages/Skills/Skills';
import ParentSection from './Components/ParentSection';

function App() {
  return (
    <div className="App flex flex-col items-center bg-[#101219]">
      <Header/>
      <Home/>
      <AboutMe/>
      <Education/>
      <Skills/>
      <ParentSection sectionID='PastWorks'><p></p></ParentSection>
      <ParentSection sectionID='Contact'><p></p></ParentSection>
    </div>
  );
}

export default App;