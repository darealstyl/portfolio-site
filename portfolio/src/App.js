import React from 'react';
import './App.css';
import ProjectTile from './components/ProjectTile';
import project1image from './img/project1.png';
import Header from './components/Header';

function App() {
  const projects = [
    {
      title: 'Project Title 1',
      content: 'Detailed information about Project 1.',
      link: 'https://www.example.com',
      linkText: 'View Project 1',
      image: project1image,
    },
    {
      title: 'Project Title 2',
      content: 'Detailed information about Project 2.',
    },
    {
      title: 'Project Title 3',
      content: 'Detailed information about Project 2.',
    },
    {
      title: 'Project Title 4',
      content: 'Detailed information about Project 2.',
    },
    // Add more projects here
  ];

  return (
    // Add a header component here

    <div className="portfolio-container">
      <Header />
      {/* <h1>My Portfolio</h1> */}
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectTile
            key={index}
            title={project.title}
            content={project.content}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
