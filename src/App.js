import React, { Component } from 'react';
import Projects from './Projects';
import cardInfo from './Data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: cardInfo
    }
  }

  render() {
    return (
      <main>
        <h1>Robert DeRouin</h1>
        <h2>Software Engineer</h2>
        <a href="https://www.linkedin.com/in/robert-derouin/">LinkedIn</a>
        <p>I am a software engineer looking to change my community for the better
  through superior technology. I am well versed in JavaScript, HTML, CSS,
  SASS, React & Cypress. I have a passion for front end development and learning new skills.</p>
        <h3>Techincal Expertise</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>GIT</li>
            <li>GitHub</li>
            <li>Cypress</li>
            <li>Mocha/Chai</li>
          </ul>
        <Projects projects={this.state.projects}/>
      </main>
    )
  }
}

export default App;

