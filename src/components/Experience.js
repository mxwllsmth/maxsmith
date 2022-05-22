import React from 'react';
import '../styles/Experience.css';

const Experience = props => {
  return (
    <div id="expPage">

      <div id="techSkillsContainer">

        <div id="tSkillsContainer" className="reveal fade-in-three active">
          <h2 id="tSkills">T e c h n i c a l &nbsp; S k i l l s</h2>
        </div>

        <div id="skillsContainer">
            <div className="skillJAVA reveal fade-in-two active"><p id="skill">Java</p></div>
            <div className="skillUNIT reveal fade-in-two active"><p id="skill">Unit Testing</p></div>
            <div className="skillJS reveal fade-in-two active"><p id="skill">JavaScript</p></div>
            <div className="skillJSX reveal fade-in-two active"><p id="skill">JSX</p></div>
            <div className="skillPSQL reveal fade-in-two active"><p id="skill">PostgreSQL</p></div>
            <div className="skillHTML reveal fade-in-two active"><p id="skill">HTML</p></div>
            <div className="skillCSS reveal fade-in-two active"><p id="skill">CSS</p></div>
            <div className="skillSPRING reveal fade-in-two active"><p id="skill">Spring Boot</p></div>
            <div className="skillJSON reveal fade-in-two active"><p id="skill">JSON</p></div>
            <div className="skillREACT reveal fade-in-two active"><p id="skill">React.js</p></div>
            <div className="skillVUE reveal fade-in-two active"><p id="skill">Vue.js</p></div>
            <div className="skillGIT reveal fade-in-two active"><p id="skill">Git</p></div>
            <div className="skillINTELLIJ reveal fade-in-two active"><p id="skill">IntelliJ</p></div>
            <div className="skillVSCODE reveal fade-in-two active"><p id="skill">VS Code</p></div>
            <div className="skillPOSTMAN reveal fade-in-two active"><p id="skill">Postman</p></div>
            <div className="skillPGADMIN reveal fade-in-two active"><p id="skill">pgAdmin 4</p></div>
        </div>

      </div>

      <div className="profExperience reveal fade-in-three active"><h2 id="pExperience">P r o f e s s i o n a l &nbsp; E x p e r i e n c e</h2></div>
      <div className="profExperience reveal fade-in-three active"><h2 id="pExperiencePhone">P r o f e s s i o n a l<br/>E x p e r i e n c e</h2></div>
      <div id="brightStarsContainer" className="reveal fade-in-three active">
        <div id="brightStars">
          <div id="subHeader" className="bsgaHeader">
            <a href="https://brightstarsgym.com/" target="_blank" rel="noopener noreferrer"><h2 id="title" className="bsgaTitle">Bright Stars Gymnastics Academy</h2></a>
            <h4 id="dateBSGA">2016 - 2021</h4>
          </div>
          <h2 id="jobTitle">Gymnastics Instructor / Program Director</h2>
          <p>Over the six years that I worked at Bright Stars I was able to grow tremendously as a person and as an employee. Working in a fast paced and demanding
          environment had a lot to offer me, and through my time there I became an increasingly efficient worker, a stong team leader, and overall, a valuable 
          addition to any team. My responsibilities ranged from coaching, where I would teach classes, communicate with parents, and train team members - to
          program management, where I would write lesson plans and lead our team of coaches - to customer service, where I dealt with some of our more
          delicate situations and helped to ensure the gym was functioning in an organized and efficient mannor.</p> 
          <p></p>
          <p>During my time at Bright Stars I :</p>
          <p></p>
          <p>- Taught the top recreational gymnastics classes in the area and offered a great amount of care, knowledge, and guidance to my students.</p>
          <p>- Influenced all gym classes by creating new drills and sharing the ideas and methods that made my own classes so successful.</p>
          <p>- Left a blueprint for how classes should be taught, including practicing proper/ safe progressions, and being a safe and effective coach.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Experience;