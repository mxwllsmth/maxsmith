import React from 'react';
import '../styles/Home.css';
import linkedinLogo from '../images/linkedinLogo.png'
import instagramLogo from '../images/instagramLogo.png'
import githubLogo2 from '../images/githublogo2-modified.png'

const Home = props => {
  return (
    <div id="mainContainer">
      <div id="homeContainer">
        <h1 id="welcome">W e l c o m e</h1>
        <div id="siteNav">
          <a href="https://github.com/mxwllsmth"><img src={githubLogo2} id="logo" alt="Github Logo"/></a>
          <a href="https://www.linkedin.com/in/maxwell-b-smith/"><img src={linkedinLogo} id="logo" alt="Linkedin Logo"/></a>
          <a href="https://www.instagram.com/mxwllsmth/"><img src={instagramLogo} id="logo" alt="Instagram Logo"/></a>
        </div>
      </div>
    </div>
  );
};

export default Home;