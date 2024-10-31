import React from 'react';
import Introduction from './Introduction.js';
import Background from './Background.js';
import Projects from './Projects.js';
import Skills from './Skills.js';
import Experience from './Experience.js';

import Blog from './Blog.js';
import Achievements from './Achievements.js';
import Contact from './Contact.js';
import './App.css'; // Import the CSS file for styling

const App = () => (
  <div className="app">
    <Introduction />
    <Background />
    <Skills />
    <Experience />
    <Blog />
    <Achievements />
    <Projects />
    <Contact />
  </div>
);

export default App;
