import React, { useState, useEffect } from 'react';
import '../styles/Home2.css';
import linkedinLogo from '../images/linkedinLogo.png';
import instagramLogo from '../images/instagramLogo.png';
import githubLogo2 from '../images/githublogo2-modified.png';
import resume from '../docs/Max Smith- Resume.pdf'
import landingImg from '../images/backgroundImg.png';

const words = ["", " ", "Music Lover", "Artist", "Software Developer."];


const Home2 = props => {

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      return;
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1400 :
      50, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 400);
    return () => clearTimeout(timeout2);
  }, [blink]);


  return (
    <div id="allHome">

      <div id="fadeOutWelcome" className="reveal active fade-out-two">

        <div id="mainContainer" className="reveal fade-in active">

          <div id="homeContainer">

            <h1 id="welcome" className="reveal active fade-in-three">W e l c o m e</h1>

          </div>

        </div>

      </div>

      <div id="fadeInHomeView" className="reveal active fade-in" display="none">

        <img id="landingImg" src={landingImg} alt="backgroundArt" z-index="-1" />

        <div id="homeMain">
          
          <div>
            <h1 id="iAmA">Hi,<br />
              My name is Max, <br />
              and I'm a <span id="makeItRainbow" className="iAmAHome">{`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}</span>
            </h1>

            <p id="aboutMe">Full-stack developer with a background in art and philosophy,<br/>
            six years of experience working in fast-paced and demanding environments,<br/>
            and endless drive to learn and create.</p>

          </div>

          <div id="siteNav">
            <a href="https://github.com/mxwllsmth" target="_blank" rel="noopener noreferrer"><img src={githubLogo2} id="logo" alt="Github Logo" className="reveal fade-in-five active" /></a>
            <a href="https://www.linkedin.com/in/maxwell-b-smith/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} id="logo" alt="Linkedin Logo" className="reveal fade-in-five active" /></a>
            <a href="https://www.instagram.com/mxwllsmth/" target="_blank" rel="noopener noreferrer"><img src={instagramLogo} id="logo" alt="Instagram Logo" className="reveal fade-in-five active" /></a>
          </div>

        </div>

        <div id="homeFooter">

          <a id="viewResume" href={resume} target="_blank" rel="noreferrer">View My Resume</a>
          <p id="email">Contact me: maxwell.bsmith0@gmail.com</p>

        </div>

      </div>

    </div>
  );
};

export default Home2;