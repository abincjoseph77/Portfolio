import React, { useState, useEffect } from 'react';
import '../components/style/projects.css';

const projects = [
  {
    id: 'project1',
    image: '/images/cretal.png',
    title: 'E-commerce Platform',
    description: 'A full-featured online store with user authentication, product management, and payment processing.',
    tech: ['Django', 'PostgreSQL', 'Stripe API'],
    github: 'https://github.com/yourusername/ecommerce-platform',
    demo: 'https://ecommerce-demo.com',
  },
  {
    id: 'project2',
    image: '/images/crm.png',
    title: 'Data Analysis Tool',
    description: 'Processes large datasets with interactive visualizations and automated reporting features.',
    tech: ['Pandas', 'Matplotlib', 'NumPy'],
    github: 'https://github.com/yourusername/data-analysis-tool',
    demo: 'https://data-analysis-demo.com',
  },
  {
    id: 'project3',
    image: '/images/topics.png',
    title: 'Task Automation',
    description: 'Automated business workflows saving 20+ hours weekly through Python scripting.',
    github: 'https://github.com/yourusername/task-automation',
    demo: 'https://automation-demo.com',
  },
  {
    id: 'project4',
    image: '/images/todo.png',
    title: 'Weather Application',
    description: 'Real-time weather forecasting app with location detection and 5-day forecasts.',

    github: 'https://github.com/yourusername/weather-app',
    demo: 'https://weather-demo.com',
  },
  {
    id: 'project5',
    image: '/images/portfolio.png',
    title: 'Portfolio Website',
    description: 'Responsive personal portfolio website showcasing projects and skills.',

    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://portfolio-demo.com',
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
        <h2>My Projects</h2>
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