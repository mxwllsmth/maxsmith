import React from 'react';
import '../styles/Education.css';
import StocktonLogo from '../images/StocktonLogo-modified.png'
import TELogo from '../images/TElogo-modified.png'

const Education = props => {
  return (
    <div>
      <div id="stocktonContainer">
        <div id="stocktonU">
          <div id="subHeader">
          <a href="https://stockton.edu/"><h2 id="title">Stockton University</h2></a>
            <h4>2018 - 2020</h4>
          </div>
          <p id="firstLine">I attended Stockton University for three years in pursuit of a carer that felt right for me. Over my time there, I changed my major three times.</p>
          <p>My first major was philosophy, and although I decided early on that I no longer wanted to pursue teaching at the collegiate level and changed my major,</p> 
          <p>my interests in the subject persisted, and I took philosophy classes each semester throughout my time there. Over the next two years I took classes in</p> 
          <p>environmental science, political science, and studio art in search of a field I was excited to work in, but as much as I loved learning about these subjects,</p> 
          <p>I couldn't imagine myself doing the related work. Now, finally, I've found a career path that I'm excited to be working in - software development.</p> 
          <p>Working in software development employs the skills that I learned through studying philosophy, along with many other things I learned during my time </p> 
          <p>at Stockton, and I couldn't be happier to see my past experience coming through in my work.</p>
        </div>
        <div> 
        <a href="https://stockton.edu/"><img src={StocktonLogo} id="stocktonLogo" alt="Stockton University Emblem"/></a>
        </div>
      </div>
      <div id="teContainer">
        <div id="img"> 
        <a href="https://www.techelevator.com/"><img src={TELogo} id="teLogo" alt="Tech Elevator Emblem"/></a>
        </div>
        <div id="techE">
          <div id="subHeader">
            <a href="https://www.techelevator.com/"><h2 id="title">Tech Elevator</h2></a>
            <h4>01/22 - 04/22</h4>
          </div>
          <p>Tech Elevator is a full stack coding bootcamp that teaches students to create dynamic web based software systems.</p>
          <p>This 14-week program provides around 700 hours of developmental education and application in the following thechnologies:</p>
          <div id="list">
            <li>Java</li>
            <li>PostgreSQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Vue.js</li>
            <li>Git/ Version Control</li>
            <li>JSON</li>
            <li>Spring Boot</li>
            <li>Unit Testing ( JUnit )</li>
            <li>Responsive design</li>
            <li>IntelliJ</li>
            <li>Visual Studio Code</li>
            <li>pg Admin4</li>
          </div>
          <p>In addition, this program provided valuable experience in pair and mob programming as well as debugging and troubleshooting.</p>
        </div>
      </div>
    </div>
  );
};

export default Education;