import React, { useState } from 'react';
import Settings from './components/Settings';
import ExerciseSession from './components/ExerciseSession';
import { techniques, backgrounds } from './data/exercises';

function App() {
  const [selectedTechnique, setSelectedTechnique] = useState(techniques[0]);
  const [selectedDuration, setSelectedDuration] = useState(120); // 2 mins
  const [selectedBackground, setSelectedBackground] = useState(backgrounds[0].src);
  const [isSessionActive, setIsSessionActive] = useState(false);

  // Find the current background object to get the credit URL
  const currentBg = backgrounds.find(bg => bg.src === selectedBackground) || backgrounds[0];

  return (
    <div
      className="app-container"
      style={{ backgroundImage: `url(${selectedBackground})` }}
    >
      <div className="overlay">
        {!isSessionActive ? (
          <Settings
            selectedTechnique={selectedTechnique}
            setSelectedTechnique={setSelectedTechnique}
            selectedDuration={selectedDuration}
            setSelectedDuration={setSelectedDuration}
            selectedBackground={selectedBackground}
            setSelectedBackground={setSelectedBackground}
            onStart={() => setIsSessionActive(true)}
          />
        ) : (
          <ExerciseSession
            technique={selectedTechnique}
            duration={selectedDuration}
            onStop={() => setIsSessionActive(false)}
          />
        )}
      </div>

      <a
        href={currentBg.credit}
        target="_blank"
        rel="noopener noreferrer"
        className="credit-icon"
        title="View on Unsplash"
      >
        <span className="credit-text">photo credits</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
