import React from 'react';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Art from './components/Art';
import Education from './components/Education';
import Experience from './components/Experience';
import Spotify from './components/Spotify';
import Home from './components/Home';
import Projects from './components/Projects';
import Flow from './components/Flow';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div id="headerContainerDiv">
          <Header/>
        </div>
        <div class="container">
          <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/Spotify" element={<Spotify/>} />
            <Route path="/Art" element={<Art/>} />
            <Route path="/Education" element={<Education/>} />
            <Route path="/Experience" element={<Experience/>} />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/Flow" element={<Flow/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
