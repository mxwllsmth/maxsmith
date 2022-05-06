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
        <div id="homeAbout">
          <p className="gimmeMainSpace">I'm a former philosophy student and coach turned software developer, an artist, and a music lover.
          <br/>
          I developed this website to showcase my resume and my art, as well as to learn React.js
          <br/>
          - You can contact me at -
          <br/>
          <p className="gimmeMainSpace smallLine" id="email">maxwell.bsmith0@gmail.com</p>
          <br/>
          or by following any of the links below to my social media</p>
        </div>
        <div id="siteNav">
          <a href="https://github.com/mxwllsmth" target="_blank" rel="noopener noreferrer"><img src={githubLogo2} id="logo" alt="Github Logo"/></a>
          <a href="https://www.linkedin.com/in/maxwell-b-smith/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} id="logo" alt="Linkedin Logo"/></a>
          <a href="https://www.instagram.com/mxwllsmth/" target="_blank" rel="noopener noreferrer"><img src={instagramLogo} id="logo" alt="Instagram Logo"/></a>
        </div>
      </div>
    </div>
  );
};

export default Home;