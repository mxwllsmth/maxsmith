import React from 'react';
import '../styles/Home.css';
import linkedinLogo from '../images/linkedinLogo.png';
import instagramLogo from '../images/instagramLogo.png';
import githubLogo2 from '../images/githublogo2-modified.png';
import resume from '../docs/Max Smith- Resume.pdf'

const Home = props => {
  return (
    <div id="mainContainer" className="reveal fade-in active">
      
      <div id="homeContainer">
        <h1 id="welcome">W e l c o m e</h1>

        <div id="homeAbout" className="reveal fade-in-four active">
          <p className="gimmeMainSpace">I'm a former philosophy student and coach turned software developer, an artist, and a music lover.
          <br/>
          I developed this website to showcase my resume and my art, as well as to learn React.js
          <br/>
          - You can contact me at -</p>
          <br/>
          <p className="gimmeMainSpace smallLine" id="email">maxwell.bsmith0@gmail.com</p>
          <br/>
          <p id="followLink">or by following any of the links below to my social media</p>
        </div>


        <div id="siteNav">
          <a href="https://github.com/mxwllsmth" target="_blank" rel="noopener noreferrer"><img src={githubLogo2} id="logo" alt="Github Logo" className="homeGHLogo reveal fade-in-three active"/></a>
          <a href="https://www.linkedin.com/in/maxwell-b-smith/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} id="logo" alt="Linkedin Logo" className="homeLiLogo reveal fade-in-three active"/></a>
          <a href="https://www.instagram.com/mxwllsmth/" target="_blank" rel="noopener noreferrer"><img src={instagramLogo} id="logo" alt="Instagram Logo" className="homeInstaLogo reveal fade-in-three active"/></a>
        </div>

      </div>

      <a id="viewResume" href={resume} target="_blank" rel="noreferrer">View My Resume</a>

    </div>
  );
};

export default Home;