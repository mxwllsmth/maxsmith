import React from 'react';
import '../styles/Projects.css';
import PTLogo from '../images/PotholeTrackerLogo.png'
import githubLogo from '../images/GITHUBLOGO-modified.png'

const Projects = props => {
  return (
    <div id="projectsPage">

      <div id="websiteContainer">
        <div id="website">
          <div id="subHeader">
            <h2 id="title-website">This website!</h2>
          </div>
          <p>I developed this website to showcase my resume in a fun way where I can include a little more about myself, as well as to learn to use React.</p>
          <p className="smallLine" id="completedUsing">This site was completed using the following technologies: </p>
          <p id="skills">React.js&nbsp;&nbsp;|&nbsp;&nbsp;JSX&nbsp;&nbsp;|&nbsp;&nbsp;HTML&nbsp;&nbsp;|&nbsp;&nbsp;CSS&nbsp;&nbsp;|&nbsp;&nbsp;VS Code</p>
        </div>
      </div>

      <div id="potholeContainer">
        <div id="img">
          <a href="https://github.com/mxwllsmth/Pothole-Tracker-Full-Stack-Web-Application" target="_blank" rel="noopener noreferrer"><img src={PTLogo} id="PTLogo" alt="Pothole Tracker App Logo"/></a>
        </div>
        <div id="pothole">
          <div id="subHeader">
            <a href="https://github.com/mxwllsmth/Pothole-Tracker-Full-Stack-Web-Application" target="_blank" rel="noopener noreferrer"><h2 id="title">Pothole Tracker Web Application</h2></a>
            <h4 className="projectDate">04/2022</h4>
          </div>
          <p>Mob programmed a dynamic full stack web application in a team of five to meet requirements set by a product owner.</p>
          <p className="smallLine" id="completedUsing">This app was completed using the following technologies: </p>
          <p id="skills" className="longSkills">PostgreSQL&nbsp;&nbsp;|&nbsp;&nbsp;Java&nbsp;&nbsp;|&nbsp;&nbsp;Vue.js&nbsp;&nbsp;|&nbsp;&nbsp;JavaScript&nbsp;&nbsp;|&nbsp;&nbsp;HTML&nbsp;&nbsp;|&nbsp;&nbsp;CSS&nbsp;&nbsp;|
          &nbsp;&nbsp;IntelliJ&nbsp;&nbsp;|&nbsp;&nbsp;VS Code&nbsp;&nbsp;|&nbsp;&nbsp;MapBox API&nbsp;&nbsp;|&nbsp;&nbsp;Postman&nbsp;&nbsp;|&nbsp;&nbsp;pgAdmin 4</p>
          <p>The goal of this project was to create a utility application for the city of Philadelphia to manage their potholes. Any person can create an account and 
          report a pothole, any person with or without an account can view reported potholes and track their repair status, and an employee/ Admin user can
          update potholes to input severity and date inspected and/or repaired, and delete potholes when necessary.</p>
          <p className="smallLine"></p>
          <p className="smallLine">- This project was completed with a ten-day time restriction and our team took an Agile approach to split the project into manageable sections of work.</p>
          <p className="smallLine"></p>
          <p className="smallLine">- My teams code for this project includes a RESTful API server, a front end client in Vue.js, a normalized database, and a third-party API from MapBox.</p>
        </div>
      </div>

      <div id="tenmoContainer">
        <div id="tenmo">
          <div id="subHeader">
            <a href="https://github.com/mxwllsmth/TEnmo-Venmo-Mimic-Command-Line-Application" target="_blank" rel="noopener noreferrer"><h2 id="title">TEnmo - Venmo Mimic Application</h2></a>
            <h4 className="projectDate">03/2022</h4>
          </div>
          <p>Pair programmed a command line application to mimic the functionality of Venmo.</p>
          <p className="smallLine" id="completedUsing">This app was completed using the following technologies: </p>
          <p id="skills">PostgreSQL&nbsp;&nbsp;|&nbsp;&nbsp;Java&nbsp;&nbsp;|&nbsp;&nbsp;JUnit&nbsp;&nbsp;|&nbsp;&nbsp;IntelliJ&nbsp;&nbsp;|&nbsp;&nbsp;Postman&nbsp;&nbsp;|&nbsp;&nbsp;pgAdmin 4</p>
          <p>The goal of this project was to mimic the functionality of Venmo by creating a service where a user can request or send money, their transaction will be
          recorded in a database, and their account balances will be updated accordingly.</p>
          <p className="smallLine"></p>
          <p className="smallLine">- This project was completed with a five-day time restriction in a team of two.</p>
          <p className="smallLine"></p>
          <p className="smallLine">- My teams code for this project includes a RESTful API server and a backend client.</p>
        </div>
        <div id="img">
          <a href="https://github.com/mxwllsmth/TEnmo-Venmo-Mimic-Command-Line-Application" target="_blank" rel="noopener noreferrer"><img src={githubLogo} id="GHLogo" alt="Github Logo"/></a>
        </div>
      </div>

      <div id="vendingContainer">
        <div id="img">
          <a href="https://github.com/mxwllsmth/Vending-Machine-Command-Line-Application" target="_blank" rel="noopener noreferrer"><img src={githubLogo} id="GHLogoVM" alt="Github Logo"/></a>
        </div>
        <div id="vending">
          <div id="subHeader">
            <a href="https://github.com/mxwllsmth/Vending-Machine-Command-Line-Application" target="_blank" rel="noopener noreferrer"><h2 id="title">Vending Machine Application</h2></a>
            <h4 className="projectDate">02/2022</h4>
          </div>
          <p>Pair programmed a command line application to emulate a vending machine.</p>
          <p className="smallLine" id="completedUsing">This app was completed using the following technologies: </p>
          <p id="skills">Java&nbsp;&nbsp;|&nbsp;&nbsp;IntelliJ&nbsp;&nbsp;|&nbsp;&nbsp;JUnit</p>
          <p>The goal of this project was to make a fully functional virtual vending machine that behaves just like a real one. The vending machine needed to be
          able to take money and track the users balance, verify purchases for inventory and balance, give change in number of each coin type, and log all
          transactions and events.</p>
          <p className="smallLine"></p>
          <p className="smallLine">- This project was completed with a four-day time restriction in a team of two.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Projects;