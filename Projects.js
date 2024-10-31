import React from 'react';
import './App.css'; // Import the CSS file

const projects = [
  {
    title: 'Hospital Management System',
    description: '',
    role: 'Designer, Developer, Project Manager',
    tech: 'Java, PHP, DSA, HTML, CSS',
   
  },
  {
    title: 'Railway Reservation System Development',
    description: 'The Railway Reservation System is a web-based application designed to facilitate the booking and management of train tickets. Built using HTML, CSS, JavaScript, PHP, and MySQL, this system provides users with an efficient and user-friendly platform to search for trains, book tickets, and manage reservations, all while ensuring data integrity and security.',
    role: 'Designer, Developer, Project Manager',
    tech: 'HTML, CSS, PHP, MySQL',
    
  },
  {
    title: 'Web Application Development using React.js',
    description: 'At Rhombic Technologies, I developed a dynamic web application using React.js, focusing on creating a responsive and user-friendly interface. My role involved designing reusable components, implementing efficient state management with Redux, and integrating RESTful APIs for real-time data fetching. By utilizing CSS frameworks like Bootstrap, I ensured the application was accessible across various devices. Additionally, I conducted thorough testing with Jest and React Testing Library to guarantee reliability and performance. The project resulted in increased user engagement and positive client feedback, significantly enhancing my skills in modern web development.',
    role: 'Designer, Developer, Project Manager',
    tech: 'HTML, CSS, React, JavaScript, Node',
    
  },
];

const Projects = () => (
  <section className="projects">
    <h2 className="projects-heading">Projects</h2>
    {projects.map((project, index) => (
      <div key={index} className="project-card">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-role"><strong>Role:</strong> {project.role}</p>
        <p className="project-tech"><strong>Tech Used:</strong> {project.tech}</p>
        
      </div>
    ))}
  </section>
);

export default Projects;
