import React from 'react';

const LegalModal = ({ onClose }) => {
    return (
        <div className="legal-modal-overlay">
            <div className="legal-modal">
                <button className="close-btn" onClick={onClose}>&times;</button>
                <div className="legal-content">
                    <h1>Legal Notice / Impressum</h1>

                    <section>
                        <h2>Angaben gemäß § 5 TMG</h2>
                        <p>Max Wittig</p>
                        <p>Schoenbuehlring 68</p>
                        <p>6020 Emmenbruecke</p>
                        <p>Switzerland</p>
                    </section>

                    <section>
                        <h2>Contact</h2>
                        <p>Email: max.wittig@antigravity.ch</p>
                    </section>

                    <h1>Privacy Policy / Datenschutzerklärung</h1>

                    <section>
                        <h2>1. General Information</h2>
                        <p>The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this data protection declaration.</p>
                    </section>

                    <section>
                        <h2>2. Data Collection on our Website</h2>
                        <h3>Cookies/Local Storage</h3>
                        <p>This application stores user preferences (such as selected breathing technique or dark mode settings) locally on your device using "Local Storage". No personal data is transmitted to our servers.</p>

                        <h3>Hosting</h3>
                        <p>The website is hosted by [GitHub Pages / Vercel / Netlify]. Standard server logs (including IP addresses) may be collected by the hosting provider for security and maintenance purposes.</p>
                    </section>

                    <section>
                        <h2>3. Third Party Services</h2>
                        <h3>Unsplash</h3>
                        <p>Background images are loaded directly from Unsplash. Your IP address is transmitted to Unsplash (Unsplash Inc.) to load these images.</p>
                    </section>

                    <h1>Licenses</h1>
                    <section>
                        <p><strong>Images:</strong> Sourced from Unsplash (Unsplash License).</p>
                        <p><strong>Font:</strong> Inter (SIL Open Font License).</p>
                        <p><strong>Audio:</strong></p>
                        <ul>
                            <li>Wind: User provided</li>
                            <li>Ocean/Fireplace: [License Information Needed]</li>
                            <li>Space/Coffee: Google Actions Library (To be replaced for commercial use)</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default LegalModal;
