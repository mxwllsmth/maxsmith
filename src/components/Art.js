import React from 'react';

import '../styles/Art.css';

import '../ScrollAnimate';

import spaceFace from '../images/Space Face Print.JPG';
import astroFeceic from '../images/Astro Faceic Print.JPG';
import babaTequila from '../images/Baba Tequila Print.JPG';
import cogito from '../images/Cogito Print.JPG';
import hydrospace from '../images/Hydrospace Print.JPG';
import one from '../images/Mindscape 1 Print.JPG';
import plur from '../images/P.L.U.R. Print.JPG';
import portrait from '../images/Portrait.JPG';
import purpleRain from '../images/Purple Rain Print.JPG';
import voidArt from '../images/Void Print.JPG';
import unicorn from '../images/unicorn.JPG';
import selfPortrait from '../images/SelfPortrait.JPG';
import boundless from '../images/Boundless Print.JPG';
import motionImg from '../images/motion.JPG';
import heads from '../images/Heads.JPG';


const Art = props => {

  return (

    <div id="artPage">

      <div id="mainArtDisplay" className="reveal fade-in active">
        <h2 className="artSubHeader">W e l c o m e &nbsp; t o &nbsp; m y &nbsp; a r t &nbsp; g a l l e r y</h2>

        <div className="artwork">
          <div className="reveal fade-left active" id="spDelay">
            <img src={selfPortrait} id="selfPortrait" alt="Artwork"/>
          </div>
          <div className="artInfo reveal fade-in active" id="spDelay">
            <h3 className="artTitle">S e l f &nbsp; P o r t r a i t</h3>
            <p className="date">- &nbsp;2 0 2 0&nbsp; -</p>
            <p id="artPSpace">12.5" h x 19.5" w</p>
            <p id="artPSpace">Watercolor, ink, and marker on paper</p>
          </div>
        </div>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">S p a c e &nbsp; F a c e</h3>
            <p className="date">- &nbsp;2 0 2 0&nbsp; -</p>
            <p id="artPSpace">16" h x 20" w x 1.5"</p>
            <p id="artPSpace">Acrylic, ink and resin on canvas</p>
          </div>
          <div className="revealWithScroll fade-right">
            <img src={spaceFace} id="spaceFace" alt="Artwork"/>
          </div>
        </div>

        <div className="artwork">
          <div className="revealWithScroll fade-left">
            <img src={cogito} id="cogito" alt="Artwork"/>
          </div>
          <div className="artInfo">
            <h3 className="artTitle">C o g i t o</h3>
            <p className="date">- &nbsp;2 0 1 9&nbsp; -</p>
            <p id="artPSpace">12" h x 12" w x 1"</p>
            <p id="artPSpace">Mixed media, ink, acrylic and resin on wood</p>
          </div>
        </div>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">A s t r o &nbsp; F a c e i c</h3>
            <p className="date">- &nbsp;2 0 2 0&nbsp; -</p>
            <p id="artPSpace">8" h x 8" w x 1.5"</p>
            <p id="artPSpace">Mixed media, ink, acrylic and resin on wood</p>
          </div>
          <div className="revealWithScroll fade-right">
            <img src={astroFeceic} id="astroFaceic" alt="Artwork"/>
          </div>
        </div>

        <div className="artwork">
          <div className="revealWithScroll fade-left">
            <img src={hydrospace} id="hydrospace" alt="Artwork"/>
          </div>
          <div className="artInfo">
            <h3 className="artTitle">H y d r o s p a c e</h3>
            <p className="date">- &nbsp;2 0 2 0&nbsp; -</p>
            <p id="artPSpace">12" h x 24" w x 1.5"</p>
            <p id="artPSpace">Mixed media, ink, acrylic and resin on wood</p>
          </div>
        </div>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">U n t i t l e d</h3>
            <p className="date">- &nbsp;2 0 1 6&nbsp; -</p>
            <p id="artPSpace">9" h x 12" w</p>
            <p id="artPSpace">Watercolor on paper</p>
          </div>
          <div className="revealWithScroll fade-right">
            <img src={portrait} id="portrait" alt="Artwork"/>
          </div>
        </div>

        <div className="artwork">
          <div className="revealWithScroll fade-left">
            <img src={voidArt} id="voidArt" alt="Artwork"/>
          </div>
          <div className="artInfo">
            <h3 className="artTitle">V o i d</h3>
            <p className="date">- &nbsp;2 0 1 9&nbsp; -</p>
            <p id="artPSpace">10" h x 20" w x 1.5"</p>
            <p id="artPSpace">Acrylic and resin on canvas</p>
          </div>
        </div>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">T h e &nbsp; N o w</h3>
            <p className="date">- &nbsp;2 0 2 0&nbsp; -</p>
            <p id="artPSpace">20" h x 16" w x 1.5"</p>
            <p id="artPSpace">Mixed media, acrylic and resin on wood</p>
          </div>
          <div className="revealWithScroll fade-right">
            <img src={unicorn} id="unicorn" alt="Artwork"/>
          </div>
        </div>

        <div className="artwork">
          <div className="revealWithScroll fade-left">
            <img src={heads} id="heads" alt="Artwork"/>
          </div>
          <div className="artInfo">
            <h3 className="artTitle">A n o t h e r &nbsp; P u r p o s e</h3>
            <p className="date">- &nbsp;2 0 2 1&nbsp; -</p>
            <p id="artPSpace">22" h x 28" w x 1.5"</p>
            <p id="artPSpace">Acrylic and oil on canvas</p>
          </div>
        </div>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">P . L . U . R .</h3>
            <p className="date">- &nbsp;2 0 1 9&nbsp; -</p>
            <p id="artPSpace">12" h x 24" w x 1"</p>
            <p id="artPSpace">Acrylic on wood</p>
          </div>
          <div className="revealWithScroll fade-right">
            <img src={plur} id="plur" alt="Artwork"/>
          </div>
        </div>

        <div className="artwork">
          <div className="revealWithScroll fade-left">
            <img src={babaTequila} id="babaTequila" alt="Artwork"/>
          </div>
          <div className="artInfo">
            <h3 className="artTitle">B a b a &nbsp; T e q u i l a</h3>
            <p className="date">- &nbsp;2 0 2 0&nbsp; -</p>
            <p id="artPSpace">18" h x 24" w x 1.5"</p>
            <p id="artPSpace">Acrylic and oil on canvas</p>
          </div>
        </div>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">B o u n d l e s s</h3>
            <p className="date">- &nbsp;2 0 2 0&nbsp; -</p>
            <p id="artPSpace">24" h x 48" w x 1.5"</p>
            <p id="artPSpace">Mixed media, acrylic and resin on canvas</p>
          </div>
          <div className="revealWithScroll fade-right">
            <img src={boundless} id="boundless" alt="Artwork"/>
          </div>
        </div>

        <div className="artwork">
          <div className="revealWithScroll fade-left">
            <img src={motionImg} id="motion" alt="Artwork"/>
          </div>
          <div className="artInfo">
            <h3 className="artTitle">M o t i o n</h3>
            <p className="date">- &nbsp;2 0 1 7&nbsp; -</p>
            <p id="artPSpace">12" h x 24" w x 1.5"</p>
            <p id="artPSpace">Acrylic and resin on wood</p>
          </div>
        </div>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">O n e</h3>
            <p className="date">- &nbsp;2 0 2 0&nbsp; -</p>
            <p id="artPSpace">40" h x 20" w x 1.5"</p>
            <p id="artPSpace">Acrylic and ink on canvas</p>
          </div>
          <div className="revealWithScroll fade-right">
            <img src={one} id="one" alt="Artwork"/>
          </div>
        </div>

        <div className="artwork">
          <div className="revealWithScroll fade-left">
            <img src={purpleRain} id="purpleRain" alt="Artwork"/>
          </div>
          <div className="artInfo">
            <h3 className="artTitle">P u r p l e &nbsp; R a i n</h3>
            <p className="date">- &nbsp;2 0 1 9&nbsp; -</p>
            <p id="artPSpace">20" h x 16" w x 1.5"</p>
            <p id="artPSpace">Acrylic, ink and resin on canvas</p>
          </div>
        </div>
      </div>




      <div id="phoneArtDisplay" className="reveal fade-in active">
        <h2 className="artSubHeader phoneArtSubHead">W e l c o m e &nbsp; t o &nbsp; m y<br/>a r t &nbsp; g a l l e r y</h2>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">S e l f &nbsp; P o r t r a i t</h3>
            <p className="date">- &nbsp;2 0 2 0&nbsp; -</p>
            <p id="artPSpace">12.5" h x 19.5" w</p>
            <p id="artPSpace">Watercolor, ink, and marker on paper</p>
          </div>
          <div>
            <img src={selfPortrait} id="selfPortrait" alt="Artwork"/>
          </div>
        </div>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">S p a c e &nbsp; F a c e</h3>
            <p className="date">- &nbsp;2 0 2 0&nbsp; -</p>
            <p id="artPSpace">16" h x 20" w x 1.5"</p>
            <p id="artPSpace">Acrylic, ink and resin on canvas</p>
          </div>
          <div>
            <img src={spaceFace} id="spaceFace" alt="Artwork"/>
          </div>
        </div>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">C o g i t o</h3>
            <p className="date">- &nbsp;2 0 1 9&nbsp; -</p>
            <p id="artPSpace">12" h x 12" w x 1"</p>
            <p id="artPSpace">Mixed media, ink, acrylic and resin on wood</p>
          </div>
          <div>
            <img src={cogito} id="cogito" alt="Artwork"/>
          </div>
        </div>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">A s t r o &nbsp; F a c e i c</h3>
            <p className="date">- &nbsp;2 0 2 0&nbsp; -</p>
            <p id="artPSpace">8" h x 8" w x 1.5"</p>
            <p id="artPSpace">Mixed media, ink, acrylic and resin on wood</p>
          </div>
          <div>
            <img src={astroFeceic} id="astroFaceic" alt="Artwork"/>
          </div>
        </div>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">H y d r o s p a c e</h3>
            <p className="date">- &nbsp;2 0 2 0&nbsp; -</p>
            <p id="artPSpace">12" h x 24" w x 1.5"</p>
            <p id="artPSpace">Mixed media, ink, acrylic and resin on wood</p>
          </div>
          <div>
            <img src={hydrospace} id="hydrospace" alt="Artwork"/>
          </div>
        </div>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">U n t i t l e d</h3>
            <p className="date">- &nbsp;2 0 1 6&nbsp; -</p>
            <p id="artPSpace">9" h x 12" w</p>
            <p id="artPSpace">Watercolor on paper</p>
          </div>
          <div>
            <img src={portrait} id="portrait" alt="Artwork"/>
          </div>
        </div>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">V o i d</h3>
            <p className="date">- &nbsp;2 0 1 9&nbsp; -</p>
            <p id="artPSpace">10" h x 20" w x 1.5"</p>
            <p id="artPSpace">Acrylic and resin on canvas</p>
          </div>
          <div>
            <img src={voidArt} id="voidArt" alt="Artwork"/>
          </div>
        </div>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">T h e &nbsp; N o w</h3>
            <p className="date">- &nbsp;2 0 2 0&nbsp; -</p>
            <p id="artPSpace">20" h x 16" w x 1.5"</p>
            <p id="artPSpace">Mixed media, acrylic and resin on wood</p>
          </div>
          <div>
            <img src={unicorn} id="unicorn" alt="Artwork"/>
          </div>
        </div>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">A n o t h e r &nbsp; P u r p o s e</h3>
            <p className="date">- &nbsp;2 0 2 1&nbsp; -</p>
            <p id="artPSpace">22" h x 28" w x 1.5"</p>
            <p id="artPSpace">Acrylic and oil on canvas</p>
          </div>
          <div>
            <img src={heads} id="heads" alt="Artwork"/>
          </div>
        </div>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">P . L . U . R .</h3>
            <p className="date">- &nbsp;2 0 1 9&nbsp; -</p>
            <p id="artPSpace">12" h x 24" w x 1"</p>
            <p id="artPSpace">Acrylic on wood</p>
          </div>
          <div>
            <img src={plur} id="plur" alt="Artwork"/>
          </div>
        </div>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">B a b a &nbsp; T e q u i l a</h3>
            <p className="date">- &nbsp;2 0 2 0&nbsp; -</p>
            <p id="artPSpace">18" h x 24" w x 1.5"</p>
            <p id="artPSpace">Acrylic and oil on canvas</p>
          </div>
          <div>
            <img src={babaTequila} id="babaTequila" alt="Artwork"/>
          </div>
        </div>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">B o u n d l e s s</h3>
            <p className="date">- &nbsp;2 0 2 0&nbsp; -</p>
            <p id="artPSpace">24" h x 48" w x 1.5"</p>
            <p id="artPSpace">Mixed media, acrylic and resin on canvas</p>
          </div>
          <div>
            <img src={boundless} id="boundless" alt="Artwork"/>
          </div>
        </div>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">M o t i o n</h3>
            <p className="date">- &nbsp;2 0 1 7&nbsp; -</p>
            <p id="artPSpace">12" h x 24" w x 1.5"</p>
            <p id="artPSpace">Acrylic and resin on wood</p>
          </div>
          <div>
            <img src={motionImg} id="motion" alt="Artwork"/>
          </div>
        </div>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">O n e</h3>
            <p className="date">- &nbsp;2 0 2 0&nbsp; -</p>
            <p id="artPSpace">40" h x 20" w x 1.5"</p>
            <p id="artPSpace">Acrylic and ink on canvas</p>
          </div>
          <div>
            <img src={one} id="one" alt="Artwork"/>
          </div>
        </div>

        <div className="artwork">
          <div className="artInfo">
            <h3 className="artTitle">P u r p l e &nbsp; R a i n</h3>
            <p className="date">- &nbsp;2 0 1 9&nbsp; -</p>
            <p id="artPSpace">20" h x 16" w x 1.5"</p>
            <p id="artPSpace">Acrylic, ink and resin on canvas</p>
          </div>
          <div>
            <img src={purpleRain} id="purpleRain" alt="Artwork"/>
          </div>
        </div>
        
      </div>

    </div>
  );
};

export default Art;