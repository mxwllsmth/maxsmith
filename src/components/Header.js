import React from 'react';
import '../styles/Header.css';
import { Link } from "react-router-dom";

function Header() {

  const StopDisplay = () => {
    document.querySelector('.dropdown-content').style.display = "none";
  }

  const StartDisplay = () => {
    document.querySelector('.dropdown-content').style.display = "flex";
    document.querySelector('.dropdown-content').style.flexdirection = "column";
    document.querySelector('.dropdown-content').style.justifycontent = "space-evenly";
  }


  return (
    <div id="Header">

      <div className="reveal fade-in active">

        <header id="mainHeader" className="App-header">
          <nav id="container">
            <Link to="/" id="name">
              <h1 id="max">M a x w e l l</h1>
              <h1 id="smith">S m i t h</h1>
            </Link>
            <div id="headerRight">
              <Link to="Experience" id="header-nav" className="animate-right">Experience</Link>
              <Link to="Projects" id="header-nav" className="animate-right">Projects</Link>
              <Link to="Education" id="header-nav" className="animate-right">Education</Link>
              <Link to="Art" id="header-nav" className="animate-right">Art Gallery</Link>
            </div>
          </nav>
        </header>

        <header id="smallHeader" className="App-header">
          <nav id="container">
            <Link to="/" id="name">
              <h1 id="max">M a x w e l l&nbsp;&nbsp;&nbsp;S m i t h</h1>
            </Link>
            <div class="dropdown" id="dropdownIDSelector">
              <button id="threeBar" onClick={StartDisplay}>• • •</button>
              <div id="headerNavigation" class="dropdown-content dropdown-content-remove" onClick={StopDisplay}>
                <Link to="Experience" id="header-nav" className="animate-right">E x p e r i e n c e</Link>
                <Link to="Projects" id="header-nav" className="animate-right">P r o j e c t s</Link>
                <Link to="Education" id="header-nav" className="animate-right">E d u c a t i o n</Link>
                <Link to="Art" id="header-nav" className="animate-right">A r t&nbsp;&nbsp;G a l l e r y</Link>
              </div>
            </div>
          </nav>
        </header>

      </div>

    </div>
  );
}

export default Header;