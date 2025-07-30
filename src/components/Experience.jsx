import React from "react";

function Experience(){
    return(
        <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2020 - Present</div>
            <div className="timeline-content">
              <h3>Senior Data Scientist</h3>
              <h4>Tech Solutions Inc.</h4>
              <ul>
                <li>Developed machine learning models for predictive analytics</li>
                <li>Created data visualization dashboards</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2017 - 2020</div>
            <div className="timeline-content">
              <h3>Web Developer</h3>
              <h4>Digital Creative Agency</h4>
              <ul>
                <li>Built responsive websites for clients</li>
                <li>Implemented interactive features with JavaScript</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    )

}
export default Experience;