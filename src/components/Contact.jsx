import React, { useState } from 'react';
import '../components/style/contact.css';

function Contact() {
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    console.log('Form Submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p><i className="fas fa-envelope"></i>abincjoseph77@gmail.com</p>
            <p><i className="fas fa-phone"></i>9447444508</p>
            <div className="social-links">
              <a href="https://github.com/Abincjoseph20"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/abin-c-joseph/"><i className="fab fa-linkedin"></i></a>
              {/* <a href=""><i className="fab fa-whatsapp"></i></a> */}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;