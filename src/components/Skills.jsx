import React from 'react';
import '../components/style/skills.css';

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Language</h3>
            <ul>
              <li>Python</li>
              <li>HTML </li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Frameworks</h3>
            <ul>
              <li>REST Framework</li>
              <li>Django</li>
              <li>React.JS</li>
              <li>Bootstarap</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Data Base</h3>
            <ul>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>PostgreSQL</li>
              <li>MySql</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Other Tools</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;