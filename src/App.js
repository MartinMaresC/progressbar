import React, { useState, useEffect } from 'react';

const ProgressBar = ({ duration, interval }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div>
      <div
        style={{
          width: `${progress}%`,
          height: '20px',
          backgroundColor: 'lightblue',
          transition: 'width 0.5s ease',
        }}
      ></div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Progress Bar Example</h1>
      <ProgressBar duration={5000} interval={50} />
    </div>
  );
};

export default App;

