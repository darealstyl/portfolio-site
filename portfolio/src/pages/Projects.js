import React from 'react';
import ProjectTile from '../components/ProjectTile';
import project1image from '../img/project1.png';
import project2image from '../img/project2.png';
import project3image from '../img/project3.png';
import project4image from '../img/project4.png';
import project5image from '../img/project5.png';
import project6image from '../img/project7.png';
import project7image from '../img/alpha_blog_screenshot.png'

function Projects() {
  const projects = [
    {
      title: 'Alpha-Blog',
      content: 'A Ruby on Rails + Bootstrap web app with authentication and role-based authorization (admin vs user), CRUD posts, and category tagging (many-to-many). Deployed via Render using Neon for Postgres.',
      link: 'https://alpha-blog-yeqz.onrender.com/',
      linkText: 'View Project 1',
      image: project7image,
    },
    {
      title: 'Track My Degree',
      content: 'A web application that allows students to track their degree progress through a user-friendly interface that displays their courses, degree requirements, and credit calculations. Developed with React, Node.js, and SQL.',
      link: 'https://trackmydegree.com',
      linkText: 'View Project 1',
      image: project6image,
    },
    {
      title: 'Personal Music Player',
      content: 'A React based music player with a custom design. Features include a play/pause button, volume control, and a progress bar. Background designed with Three.js. Designed to play my own music that I wrote as just a fun project.',
      link: 'https://darealstyl.github.io/music-website',
      linkText: 'View Project 2',
      image: project1image,
    },
    {
      title: 'A Whole Lotta Axolotl',
      content: 'A 2D platformer game created with Unity. The game features a cute axolotl character that navigates platforms and avoids obstacles with the objective of finishing the level as quickly as possible. This project was co-developed with another student.',
      link: 'https://github.com/darealstyl/AWLAx',
      linkText: 'View Project 3',
      image: project2image,
    },
    {
      title: 'OpenGL Class Project',
      content: 'A team project for a computer graphics class. The project was to create a simulated tennis match with animations, models, and audio being coded in from scratch. The project was developed in C++ with OpenGl.',
      link: 'https://github.com/MillerSty/Coen371_Project',
      linkText: 'View Project 4',
      image: project3image,
    },
    {
      title: 'Video Game DB',
      content: 'A project for a databases class that merges video game data from the Rawg and IGDB public APIs. Developed with MySQL for relational DB, Neo4J for NoSQL alternative DB, and Python for scripting.',
      link: "https://github.com/Shredsauce/SOEN_363_PROJECT",
      linkText: 'View Project 5',
      image: project4image,
    },
    {
      title: 'Endless Driver',
      content: 'This is an on-rails driving game created as a project for a game development course. The game was made with Unity and features a procedurally generated track, obstacles, and a scoring system.',
      link: "https://github.com/darealstyl/Endless-Driver",
      linkText: 'View Project 6',
      image: project5image,
    },
    // {
    //   title: '',
    //   content: 'Detailed information about Project 2.',
    //   link: "",
    //   linkText: 'View Project 6',
    //   image: project4image,
    // },
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
