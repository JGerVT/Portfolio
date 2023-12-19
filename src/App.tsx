import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/HomeSection/Home';

function App() {
  return (
    <div className="App flex flex-col items-center">
      <Header/>
      <Home/>
      {/* <div>TEST</div> */}
    </div>
  );
}

export default App;
