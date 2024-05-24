// MovingLinesBackground.jsx
import React from 'react';

const MovingLinesBackground = () => {
  const numberOfLines = 30; // Adjust the number of lines for desired density

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="relative w-full h-full">
        {[...Array(numberOfLines)].map((_, index) => (
          <React.Fragment key={index}>
            <svg
              className="absolute w-full h-full animate-moveLine"
              style={{
                top: `${index * 2.33}%`, // Adjust the spacing between lines
                animationDelay: `${index * 0.2}s`,
                opacity: 0.1,
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <line x1="100" y1="1" x2="100" y2="0" stroke="white" strokeWidth="0.25" />
            </svg>
            <svg
              className="absolute w-full h-full animate-moveLine"
              style={{
                top: `${index * 3.33}%`, // Adjust the spacing between lines
                animationDelay: `${index * 0.2}s`,
                opacity: 0.1,
                transform: 'rotate(90deg)',
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 50"
              preserveAspectRatio="none"
            >
              <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="white" strokeWidth="0.25" />
            </svg>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MovingLinesBackground;
