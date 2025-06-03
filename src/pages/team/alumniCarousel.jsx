import { useState, useEffect } from 'react';
import alumniQuotes from '../../data/alumniQuotes';
import '../TeamPage.css';

export default function AlumniCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % alumniQuotes.length);
    }, 15000); // 15 seconds
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + alumniQuotes.length) % alumniQuotes.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % alumniQuotes.length);
  };

  return (
    <div className="alumni-carousel">
      <button className="arrow left" onClick={prevSlide}>&#10094;</button>
      
      <div className="quote-slide">
        <p className="quote">"{alumniQuotes[currentIndex].quote}"</p>
        <p className="author">— {alumniQuotes[currentIndex].author}</p>
      </div>
      
      <button className="arrow right" onClick={nextSlide}>&#10095;</button>

      <div className="dots">
        {alumniQuotes.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
