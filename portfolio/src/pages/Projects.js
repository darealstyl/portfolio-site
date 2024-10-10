import React from 'react';
import ProjectTile from '../components/ProjectTile';
import project1image from '../img/project1.png';

function Projects() {
  const projects = [
    {
      title: 'Personal Music Player',
      content: 'A React based music player with a custom design. Features include a play/pause button, volume control, and a progress bar. Background designed with Three.js. Designed to play my own music that I wrote as just a fun project.',
      link: 'https://darealstyl.github.io/music-website',
      linkText: 'View Project 1',
      image: project1image,
    },
    {
      title: 'A Whole Lotta Axolotl',
      content: 'A 2D platformer game created with Unity. The game features a cute axolotl character that navigates platforms and avoids obstacles with the objective of finishing the level as quickly as possible. This project was co-developed with another student.',
    },
    {
      title: 'Project Title 2',
      content: 'Detailed information about Project 2.',
    },
    {
      title: 'Project Title 2',
      content: 'Detailed information about Project 2.',
    },
    // Add more projects here
  ];

  return (
    <div className="portfolio-container">
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

export default Projects;
