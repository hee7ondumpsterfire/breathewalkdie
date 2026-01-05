import React, { useState } from 'react';
import Settings from './components/Settings';
import ExerciseSession from './components/ExerciseSession';
import LegalModal from './components/LegalModal';
import { techniques, backgrounds } from './data/exercises';

function App() {
  const [selectedTechnique, setSelectedTechnique] = useState(techniques[0]);
  const [selectedDuration, setSelectedDuration] = useState(120);
  const [selectedBackground, setSelectedBackground] = useState(backgrounds[0].src);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [showLegal, setShowLegal] = useState(false);

  const currentBg = backgrounds.find(bg => bg.src === selectedBackground) || backgrounds[0];

  React.useEffect(() => {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(el => {
      el.pause();
      el.currentTime = 0;
      el.remove();
    });

    if (isAudioEnabled && currentBg.audioSrc) {
      const sources = Array.isArray(currentBg.audioSrc) ? currentBg.audioSrc : [currentBg.audioSrc];
      const activeAudios = [];

      sources.forEach((src, index) => {
        const audio = new Audio(src);
        audio.loop = true;
        audio.volume = 0;
        audio.id = `bg-audio-${index}`;
        document.body.appendChild(audio);
        activeAudios.push(audio);
        audio.play().catch(e => console.log("Audio play failed:", e));
      });

      let vol = 0;
      const fadeInterval = setInterval(() => {
        if (vol < 0.5) {
          vol += 0.05;
          activeAudios.forEach(a => { if (a) a.volume = vol; });
        } else {
          clearInterval(fadeInterval);
        }
      }, 200);

      return () => {
        clearInterval(fadeInterval);
        const fadeOut = setInterval(() => {
          if (activeAudios[0] && activeAudios[0].volume > 0.05) {
            activeAudios.forEach(a => { if (a) a.volume -= 0.05; });
          } else {
            activeAudios.forEach(a => {
              a.pause();
              a.remove();
            });
            clearInterval(fadeOut);
          }
        }, 200);
      };
    }
  }, [isAudioEnabled, currentBg]);


  return (
    <div
      className="app-container"
      style={{
        backgroundImage: `url(${selectedBackground})`,
        filter: isSessionActive ? 'none' : 'none'
      }}
    >
      <div className={`overlay ${isDarkMode ? 'dark-mode' : ''}`}>
        {!isSessionActive ? (
          <Settings
            selectedTechnique={selectedTechnique}
            setSelectedTechnique={setSelectedTechnique}
            selectedDuration={selectedDuration}
            setSelectedDuration={setSelectedDuration}
            selectedBackground={selectedBackground}
            setSelectedBackground={setSelectedBackground}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            isAudioEnabled={isAudioEnabled}
            setIsAudioEnabled={setIsAudioEnabled}
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

      {showLegal && <LegalModal onClose={() => setShowLegal(false)} />}

      <button
        className="legal-link-bottom-left"
        onClick={() => setShowLegal(true)}
        title="Legal & Privacy"
      >
        Legal & Privacy
      </button>

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
