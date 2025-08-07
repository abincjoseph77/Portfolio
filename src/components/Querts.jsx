import React, { useState, useEffect } from 'react';
import '../components/style/querts.css';
const quotes = [
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  }
];

function Querts() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % quotes.length
    );
  };

  const { text, author } = quotes[currentIndex];

 return (
  <section id="querts" className="quote-section">
    <h2>Querts</h2>

    <div className="quote-carousel-container">
      <button onClick={goToPrev} className="carousel-button">❮</button>

      <div className="quote-box">
        <p className="quote-text">"{text}"</p>
        <p className="quote-author">— {author}</p>
      </div>

      <button onClick={goToNext} className="carousel-button">❯</button>
    </div>
  </section>
);

}

export default Querts;
