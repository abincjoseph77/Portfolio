import React from 'react';
import '../components/style/skills.css';

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Data Science</h3>
            <ul>
              <li>Python</li>
              <li>Pandas</li>
              <li>NumPy</li>
              <li>Scikit-learn</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Web Development</h3>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>VS Code</li>
              <li>Jupyter</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;