import React, { useState, useEffect } from 'react';
import '../components/style/projects.css';

const projects = [
  {
    id: 'project1',
    image: '/images/cretal.png',
    title: 'E-commerce Platform',
    description: 'A full-featured online store with user authentication, product management, and payment processing.',
    tech: ['Django', 'PostgreSQL', 'Stripe API'],
    github: 'https://github.com/Abincjoseph20/new-cretal.git',
    demo: 'https://new-cretal.onrender.com',
  },
  {
    id: 'project2',
    image: '/images/crm.png',
    title: 'CRM Website',
    description: 'A CRM system for banking sales executives to track daily tasks, customer interactions, and sales activities, built with Django.',
    tech: ['Pandas', 'Matplotlib', 'NumPy'],
    github: 'https://github.com/Abincjoseph20/crm.git',
    demo: 'https://crm-new-2mn1.onrender.com',
  },
  {
    id: 'project3',
    image: '/images/topics.png',
    title: 'Topics To Learn',
    description: 'A React-based learning platform to explore various topics, track learning progress, and download topic materials',
    github: 'https://github.com/Abincjoseph20/topic-listing.git',
    demo: 'https://topic-listing.vercel.app/',
  },
  {
    id: 'project4',
    image: '/images/todo.png',
    title: 'Full-stack Todo-App',
    description: 'A full-stack Todo app with a React frontend and Django REST backend for creating, updating, and managing tasks',

    github: 'https://github.com/Abincjoseph20/Todo-client.git',
    demo: 'https://todo-client-itcc.vercel.app/list',
  },
  {
    id: 'project5',
    image: '/images/portfolio.png',
    title: 'Portfolio Website',
    description: 'Responsive personal portfolio website showcasing projects and skills.',

    github: 'https://github.com/Abincjoseph20/Portfolio.git',
    demo: 'https://portfolio-eight-gray-30.vercel.app/',
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Adjust this value as needed
      
      projects.forEach(project => {
        const element = document.getElementById(project.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop &&
             scrollPosition < offsetTop + offsetHeight
            ) {
            setActiveProject(project.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (projectId, e) => {
    e.preventDefault();
    const element = document.getElementById(projectId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-wrapper">
          <div className="projects-nav">
            <ul>
              {projects.map(project => (
                <li key={project.id}>
                  <a 
                    href={`#${project.id}`}
                    className={activeProject === project.id ? 'active' : ''}
                    onClick={(e) => handleNavClick(project.id, e)}
                  >
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="projects-container">
            <div className="projects-grid">
              {projects.map(project => (
                <div id={project.id} key={project.id} className="project-card">
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-links">
                      <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i> 
                      </a>
                      <a href={project.demo} className="project-link" target="_blank" rel="noreferrer">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;