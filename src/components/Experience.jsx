import React from 'react';
import '../components/style/experience.css';

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2025</div>
            <div className="timeline-content">
              <h3>Full stack Developer Trainee</h3>
              <h4>Tinos Software and Security Solution LLP</h4>
              <ul>
                <li>Developed Learning Mnagement Project using Django</li>
                <li>Developed a AI based chatbot using Python Django</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h3>Full stack Developer Trainee</h3>
              <h4>Futuro IT Solutions Kochi</h4>
              <ul>
                <li>Built Responsive E-commerce websites using Django</li>
                <li>Built Responsive CRM websites using Django and hosted in Render</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;