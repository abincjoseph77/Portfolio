import React, { useState } from 'react';
import '../components/style/contact.css';
import Swal from 'sweetalert2'

function Contact() {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });


  const [statusMessage, setStatusMessage] = useState('');

  // Function to update form data when the user types
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update the specific field that changed
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    // Prepare data to send
    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      access_key: "8cf9fbc8-3e46-4cc6-a401-c01d630bb6e1" // Web3Forms API key
    };

    try {
      // Send POST request to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
                Swal.fire({
              title: "success!",
              text: "Message send succefully!",
              icon: "success"
            });
          }
    } catch (error) {
      setStatusMessage("Something went wrong. Please try later.");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact Me</h2>

        <div className="contact-content">

          {/* Contact Info */}
          <div className="contact-info">
            <p><i className="fas fa-envelope"></i> abincjoseph77@gmail.com</p>
            <p><i className="fas fa-phone"></i> 9447444508</p>
            <div className="social-links">
              <a href="https://github.com/Abincjoseph20" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/abin-c-joseph/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          {/* Contact Form */}
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

          {/* Status Message */}
          {statusMessage && <p className="form-status">{statusMessage}</p>}
        </div>
      </div>
    </section>
  );
}

export default Contact;
