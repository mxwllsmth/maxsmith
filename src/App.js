import React, { useState, useEffect } from 'react';
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
import Home2 from './components/Home2';
import Projects from './components/Projects';
import Flow from './components/Flow';
import ScrollToTop from './OpenAtTop';
import Loader from './loader';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    setTimeout(() => setLoading(false), 3200);
  });

  return (
    <div className="App">
      <BrowserRouter basename="/maxsmith">
        {loading === true ? (
          <Loader />
        ) : (
        <div>
          <div id="headerContainerDiv">
            <Header/>
          </div>
          <div class="container">
            <ScrollToTop />
            <Routes>
              <Route path="/" element ={<Home2/>}/>
              <Route path="/Spotify" element={<Spotify/>} />
              <Route path="/Art" element={<Art/>} />
              <Route path="/Education" element={<Education/>} />
              <Route path="/Experience" element={<Experience/>} />
              <Route path="/Projects" element={<Projects/>} />
              <Route path="/Flow" element={<Flow/>} />
            </Routes>
          </div>
        </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
