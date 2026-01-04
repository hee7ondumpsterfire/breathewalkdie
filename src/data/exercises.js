export const techniques = [
    {
        id: 'box',
        name: 'Box Breathing',
        description: 'Relieve stress and improve focus.',
        pattern: { inhale: 4, holdIn: 4, exhale: 4, holdOut: 4 }
    },
    {
        id: '4-7-8',
        name: '4-7-8 Breathing',
        description: 'Calm the nerves and help with sleep.',
        pattern: { inhale: 4, holdIn: 7, exhale: 8, holdOut: 0 }
    },
    {
        id: 'coherent',
        name: 'Coherent Breathing',
        description: 'Stabilize heart rate and relax.',
        pattern: { inhale: 5, holdIn: 0, exhale: 5, holdOut: 0 }
    }
];

export const durations = [
    { label: '1 Minute', value: 60 },
    { label: '2 Minutes', value: 120 },
    { label: '5 Minutes', value: 300 },
    { label: '10 Minutes', value: 600 }
];

// High-resolution Unsplash URLs
const relaxingBg = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=3840&auto=format&fit=crop';
const motivatingBg = 'https://unsplash.com/photos/vO9I5nAis0M/download'; // Nebula (User Requested)
const fireplaceBg = 'https://unsplash.com/photos/aAbc_C7PH4Y/download'; // Fireplace (User Requested)
const coffeeShopBg = 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=3840&auto=format&fit=crop';
const irishCoastBg = 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?q=80&w=3840&auto=format&fit=crop'; // Cliffs

// Audio Assets
import spaceAudio from '../assets/audio/space.ogg';
import fireplaceAudio from '../assets/audio/fireplace.mp3';
import coffeeAudio from '../assets/audio/coffeeshop.ogg';
import windAudio from '../assets/audio/wind.ogg';
import oceanAudio from '../assets/audio/ocean.mp3'; // Validated download or fallback
import cowbellAudio from '../assets/audio/cowbell.ogg';

export const backgrounds = [
    { id: 'relaxing', name: 'Relaxing', src: relaxingBg, credit: 'https://unsplash.com/photos/fed622ff2c3b', audioSrc: [windAudio, cowbellAudio] },
    { id: 'motivating', name: 'Motivating', src: motivatingBg, credit: 'https://unsplash.com/photos/vO9I5nAis0M', audioSrc: spaceAudio },
    { id: 'fireplace', name: 'Fireplace', src: fireplaceBg, credit: 'https://unsplash.com/photos/aAbc_C7PH4Y', audioSrc: fireplaceAudio },
    { id: 'coffeeshop', name: 'Coffee Shop', src: coffeeShopBg, credit: 'https://unsplash.com/photos/b67a49e012bf', audioSrc: coffeeAudio },
    { id: 'irishcoast', name: 'Irish Coast', src: irishCoastBg, credit: 'https://unsplash.com/photos/ddff29c27927', audioSrc: oceanAudio },
];
