import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import Header from './components/Header';
import Background from './components/Background';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import { Canvas } from '@react-three/fiber';

function App() {
  const location = useLocation(); // Get the current location from react-router

  return (
    <div className="app-container">
      {/* Fixed Header */}
      < Header />

      {/* Background */}
      <Canvas className="background-canvas" >
        <Background />
      </Canvas>

      {/* Fade Transitions for Routes */}
      <div className="scrollable-content" >
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={{ enter: 2000, exit: 500 }} /* Use different timings for enter and exit */
            unmountOnExit /* Ensure the element is removed from the DOM after exit */
            appear
          >
            <div className="page">
              <Routes location={location}>
                <Route path="/" element={<Projects />} /> {/* Default projects page */}
                <Route path="/about" element={<About />} /> {/* About page */}
                <Route path="/resume" element={<Resume />} /> {/* Resume page */}
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
