import React, { Component } from 'react';
import Projects from './Projects';
import cardInfo from './Data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: cardInfo
    }
  }

  render() {
    return (
      <div>
      <h1>Robert DeRouin</h1>
      <a href="https://www.linkedin.com/in/robert-derouin/">LinkedIn</a>
      <h2>Software Engineer</h2>
      <p>I am a software engineer looking to change my community for the better
through superior technology. I am well versed in JavaScript, HTML, CSS,
SASS, React & Cypress. For fun I am a world class miniature painter
and I coach Brazilian Jiu-Jitsu!</p>
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
      </div>
    )
  }
}

export default App;

