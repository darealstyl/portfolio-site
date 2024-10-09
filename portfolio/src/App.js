import React, { useEffect, useState } from 'react';
import './App.css';
import ProjectTile from './components/ProjectTile';
import project1image from './img/project1.png';
import Header from './components/Header';
import { Canvas } from '@react-three/fiber';
import Background from './components/Background';

function App() {
  const [fadeTiles, setFadeTiles] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setFadeTiles(true);
      } else {
        setFadeTiles(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // Add a header component here

    <div className="app-container">

      {/* Absolute positioned Canvas */}
      <Canvas className="background-canvas">
        <Background />
      </Canvas>
      <Header />
      <div className="content">
        
        {/* <h1>My Portfolio</h1> */}
        <div className="portfolio-container">
          <div className="projects">
          {projects.map((project, index) => (
            <ProjectTile
              key={index}
              title={project.title}
              content={project.content}
              link={project.link}
              image={project.image}
              // className={fadeTiles ? 'fade-out' : ''}
            />
          ))}
        </div>
        </div>
        
      </div>


      {/* Other content can go here */}
    </div>
  );
}

export default App;
