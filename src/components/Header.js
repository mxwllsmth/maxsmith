import React from 'react';
import '../styles/Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="Header">

      <div className="reveal fade-in active">

        <header id="mainHeader" className="App-header">
          <nav id="container">
            <div id="headerLeft">
              <Link to="Projects" id="header-nav" className="animate-left">Projects</Link>
              <Link to="Education" id="header-nav" className="animate-left">Education</Link>
              <Link to="Experience" id="header-nav" className="animate-left">Experience</Link>
            </div>
            <Link to="/" id="name">
              <h1 id="max">M a x w e l l</h1>
              <h1 id="smith">S m i t h</h1>
            </Link>
            <div id="headerRight">
              <Link to="Flow" id="header-nav" className="animate-right">Flow Arts</Link>
              <Link to="Art" id="header-nav" className="animate-right">Art Gallery</Link>
              <Link to="Spotify" id="header-nav" className="animate-right">Spotify</Link>
            </div>
          </nav>
        </header>

        <header id="smallHeader" className="App-header">
          <nav id="container">
            <Link to="/" id="name">
              <h1 id="max">M a x w e l l&nbsp;&nbsp;S m i t h</h1>
            </Link>
            <div class="dropdown">
              <button id="threeBar">&#8801;</button>
              <div id="headerNavigation" class="dropdown-content">
                <Link to="Projects" id="header-nav" className="animate-left">Projects</Link>
                <Link to="Education" id="header-nav" className="animate-left">Education</Link>
                <Link to="Experience" id="header-nav" className="animate-left">Experience</Link>
                <Link to="Flow" id="header-nav" className="animate-right">Flow Arts</Link>
                <Link to="Art" id="header-nav" className="animate-right">Art Gallery</Link>
                <Link to="Spotify" id="header-nav" className="animate-right">Spotify</Link>
              </div>
            </div>
          </nav>
        </header>

      </div>

    </div>
  );
}

export default Header;