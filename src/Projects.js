import React from 'react';
import Card from './Card';
import './Projects.css';

const Projects = ({projects}) => {

    const projectCards = projects.map(project => {
      return (
        <Card
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          id={project.id}
          key={project.id}
          link={project.link}
        />
      )
    })
  
    return (
      <div className='projects-container'>
        {projectCards}
      </div>
    )
  }

  export default Projects;