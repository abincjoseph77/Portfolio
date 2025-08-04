import React from 'react';
import '../components/style/about.css';

function About() {
  // Function to handle CV download
  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const cvUrl = '/documents/my-cv.pdf';
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Abion_CJ_CV.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="section">
        <br /><br />
      <div className="container">
        <br /><br />
        <h2>About Me</h2>
        <div className="about-content">
          <div className="profile-img">
            <img src="/images/abin.webp" alt="Profile" />
          </div>
          <div className="about-text">
            <p>Hello! I'm a passionate data scientist and web developer with 5 years of experience...</p>
            <p>My expertise includes Python, JavaScript, machine learning, and data visualization...</p>
            <button 
              onClick={handleDownloadCV}
              className="download-btn mobile-only"
            >
              <i className="fas fa-download"></i> Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;