import React from 'react';
import '../components/style/skills.css';

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">

          <div className="skill-category">
            <h3>Languages</h3>
            <ul>
              <li>Python</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Frameworks & Libraries</h3>
            <ul>
              <li>Django</li>
              <li>DRF</li>
              <li>React.js</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Databases</h3>
            <ul>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Tools & Platforms</h3>
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
