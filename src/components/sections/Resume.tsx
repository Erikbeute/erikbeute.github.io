import React from 'react';
import './Resume.css';

type ResumeProps = {
    onBack: () => void;
};

export const Resume: React.FC<ResumeProps> = ({ onBack }) => {
    return (

        <section id="resume" className="resume">
            <div className="resume-container">
                <button className="resume-back" onClick={onBack}>
                    ← Back
                </button>
                
                <h2 className="resume-title">Resume</h2>

                <div className="resume-block">
                    <h3>Profile</h3>
                    <p>
                        Some Text about something here. 
                    </p>
                </div>

                <div className="resume-block">
                    <h3>Experience</h3>

                    <div className="resume-item">
                        <span className="resume-meta">2024 – Present</span>
                        <strong>Software Engineer</strong>
                        <p>React, TypeScript, Laravel, Tailwind, C#</p>
                    </div>

                    <div className="resume-item">
                        <span className="resume-meta">2021 – 2023</span>
                        <strong>Web Developer</strong>
                        <p>PHP, C#, JavaScript, HTML, CSS, REST APIs, Wordpress</p>
                    </div>
                </div>

                <div className="resume-block">
                    <h3>Skills</h3>
                    <ul className="resume-skills">
                        <li>JavaScript / TypeScript</li>
                        <li>C#</li>
                        <li>React</li>
                        <li>CSS / SCSS</li>
                        <li>Three.js</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
