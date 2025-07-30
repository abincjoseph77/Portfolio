import React from 'react';

function About(){
    return(
        <section id="about" className="section">
        <div className="container">
            <h2>About Me</h2>
            <div className="about-content">
            <div className="profile-img">
                <img src="/images/abin.webp" alt="Profile" />
            </div>
            <div className="about-text">
                <p>Hello! I'm a passionate data scientist and web developer with 5 years of experience...</p>
                <p>My expertise includes Python, JavaScript, machine learning, and data visualization...</p>
            </div>
            </div>
        </div>
        </section>
    );

}
export default About;