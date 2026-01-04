import React, { useState, useEffect, useRef } from 'react';

const ExerciseSession = ({ technique, duration, onStop }) => {
    const [timeLeft, setTimeLeft] = useState(duration);
    const [instruction, setInstruction] = useState('Get Ready...');
    const [scale, setScale] = useState(1);
    const [phase, setPhase] = useState('prepare'); // prepare, inhale, holdIn, exhale, holdOut

    const pattern = technique.pattern;

    useEffect(() => {
        let timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    onStop();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [onStop]);

    useEffect(() => {
        let frameId;
        let startTime = Date.now();

        // Cycle definitions
        const cycle = [
            { type: 'inhale', duration: pattern.inhale * 1000, text: 'Inhale', startScale: 1, endScale: 2 },
            { type: 'holdIn', duration: pattern.holdIn * 1000, text: 'Hold', startScale: 2, endScale: 2 },
            { type: 'exhale', duration: pattern.exhale * 1000, text: 'Exhale', startScale: 2, endScale: 1 },
            { type: 'holdOut', duration: pattern.holdOut * 1000, text: 'Hold', startScale: 1, endScale: 1 }
        ].filter(p => p.duration > 0);

        let currentStepIndex = 0;

        const animate = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const step = cycle[currentStepIndex];

            if (elapsed < step.duration) {
                setInstruction(step.text);
                setPhase(step.type);

                // Calculate scale
                const progress = elapsed / step.duration;
                const currentScale = step.startScale + (step.endScale - step.startScale) * progress;
                setScale(currentScale);

                frameId = requestAnimationFrame(animate);
            } else {
                // Move to next step
                startTime = now;
                currentStepIndex = (currentStepIndex + 1) % cycle.length;
                frameId = requestAnimationFrame(animate);
            }
        };

        frameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frameId);
    }, [technique]);

    // Format time mm:ss
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className="session-container">
            <div className="breathing-circle-wrapper">
                <div className="breathing-circle" style={{ transform: `scale(${scale})` }}></div>
                <div className={`breathing-circle-glow ${phase}`} style={{ transform: `scale(${scale * 1.2})`, opacity: 0.5 }}></div>
            </div>

            <div className="instruction-text-below">{instruction}</div>

            <div className="controls">
                <div className="timer">{formatTime(timeLeft)}</div>
                <button className="stop-btn" onClick={onStop}>End Session</button>
            </div>
        </div>
    );
};

export default ExerciseSession;
