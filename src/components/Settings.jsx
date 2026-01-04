import { techniques, durations, backgrounds } from '../data/exercises';

const Settings = ({
    selectedTechnique, setSelectedTechnique,
    selectedDuration, setSelectedDuration,
    selectedBackground, setSelectedBackground,
    onStart
}) => {
    return (
        <div className="settings-container">
            <h1>Breathing Exercises</h1>

            <div className="section">
                <h2>1. Choose a Technique</h2>
                <div className="cards">
                    {techniques.map(t => (
                        <div
                            key={t.id}
                            className={`card ${selectedTechnique.id === t.id ? 'active' : ''}`}
                            onClick={() => setSelectedTechnique(t)}
                        >
                            <h3>{t.name}</h3>
                            <p>{t.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section">
                <h2>2. Select Duration</h2>
                <div className="buttons">
                    {durations.map(d => (
                        <button
                            key={d.value}
                            className={selectedDuration === d.value ? 'active' : ''}
                            onClick={() => setSelectedDuration(d.value)}
                        >
                            {d.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="section">
                <h2>3. Choose Environment</h2>
                <div className="bg-options">
                    {backgrounds.map(bg => (
                        <div
                            key={bg.id}
                            className={`bg-option ${selectedBackground === bg.src ? 'active' : ''}`}
                            onClick={() => setSelectedBackground(bg.src)}
                            style={{ backgroundImage: `url(${bg.src})` }}
                        >
                            <span>{bg.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <button className="start-btn" onClick={onStart}>Start Breathing</button>
        </div>
    );
};

export default Settings;
