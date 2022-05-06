import React from 'react';
import '../styles/Experience.css';

const Experience = props => {
  return (
    <div>

      <div id="techSkillsContainer">

        <div id="tSkillsContainer">
          <h2 id="tSkills">T e c h n i c a l &nbsp; S k i l l s</h2>
        </div>

        <div id="skillsContainer">
            <p id="skill">Java</p>
            <p id="skill">Unit Testing</p>
            <p id="skill">JavaScript</p>
            <p id="skill">JSX</p>
            <p id="skill">PostgreSQL</p>
            <p id="skill">HTML</p>
            <p id="skill">CSS</p>
            <p id="skill">Spring Boot</p>
            <p id="skill">JSON</p>
            <p id="skill">React.js</p>
            <p id="skill">Vue.js</p>
            <p id="skill">Version Control</p>
            <p id="skill">Git</p>
            <p id="skill">IntelliJ</p>
            <p id="skill">VS Code</p>
            <p id="skill">Postman</p>
            <p id="skill">pgAdmin 4</p>
        </div>

      </div>

      <h2 id="pExperience">P r o f e s s i o n a l &nbsp; E x p e r i e n c e</h2>
      <h2 id="pExperiencePhone">P r o f e s s i o n a l<br/>E x p e r i e n c e</h2>
      <div id="brightStarsContainer">
        <div id="brightStars">
          <div id="subHeader" className="bsgaHeader">
            <a href="https://brightstarsgym.com/" target="_blank" rel="noopener noreferrer"><h2 id="title" className="bsgaTitle">Bright Stars Gymnastics Academy</h2></a>
            <h4 id="dateBSGA">2016 - 2021</h4>
          </div>
          <h2 id="jobTitle">Gymnastics Instructor / Program Director</h2>
          <p>Over the five years that I worked at Bright Stars I was able to grow tremendously as a person and as an employee. Working in a fast paced and demanding
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