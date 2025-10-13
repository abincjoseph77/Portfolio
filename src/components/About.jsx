import React, { useEffect, useRef, useState } from 'react';
import '../components/style/Home.css';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Function to handle CV download
  const handleDownloadCV = () => {
    const cvUrl = '/documents/abin_c_j_Resume (4).pdf';
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
        
        <div className={`about-content ${isVisible ? 'animate-in' : ''}`}>
          <div className="profile-img">
            <img src="/images/abin.webp" alt="Profile" />
          </div>
          <div className="about-text">
            <h1>Hey! I'm  ABIN C J</h1>
            <p>Passionate FullStack Developer dedicated to crafting innovative web solutions with a focus on user experience, robust performance, and scalability..</p>
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