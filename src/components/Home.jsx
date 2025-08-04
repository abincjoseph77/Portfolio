import React, { useEffect, useRef, useState } from 'react';
import '../components/style/Home.css';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Function to handle CV download
  const handleDownloadCV = () => {
    const cvUrl = '/documents/my-cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Abion_CJ_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before the section is fully visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section" ref={sectionRef}>
      <br /><br />
      <div className="container">
        <br /><br />
        <h2>About Me</h2>
        <div className={`about-content ${isVisible ? 'animate-in' : ''}`}>
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

export default Home;