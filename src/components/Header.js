import React from 'react';
import '../styles/Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <header className="App-header">
        <nav id="container">
          <div id="headerLeft">
            <Link to="Projects" id="header-nav">Projects</Link>
            <Link to="Education" id="header-nav">Education</Link>
            <Link to="Experience" id="header-nav">Experience</Link>
          </div>
          <Link to="/" id="name">
            <h1 id="max">Maxwell</h1>
            <h1 id="max">Smith</h1>
          </Link>
          <div id="headerRight">
            <Link to="Flow" id="header-nav">Flow Arts</Link>
            <Link to="Art" id="header-nav">Art Gallery</Link>
            <Link to="Spotify" id="header-nav">Spotify</Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;