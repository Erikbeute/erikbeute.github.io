import React from 'react';
import './Resume.css';

type ResumeProps = {
    onBack: () => void;
};

export const Projects: React.FC<ResumeProps> = ({ onBack }) => {
    return (

        <section id="resume" className="resume">
            <div className="resume-container">
                <button className="resume-back" onClick={onBack}>
                    ← Back
                </button>
                
                <h2 className="resume-title">Projects</h2>

                <div className="resume-block">
                    <h3>Projects</h3>
                    <p>
              Some text about some projects here in this part. 
                    </p>
                </div>

                <div className="resume-block">
                    <h3>Examples</h3>

                    <div className="resume-item">
                        <span className="resume-meta">2023 – Present</span>
                        <strong>Project 1</strong>
                        <p>React, TypeScript, GSAP, Three.js</p>
                    </div>

                    <div className="resume-item">
                        <span className="resume-meta">2020 – 2023</span>
                        <strong>Project 2</strong>
                        <p>JavaScript, CSS, REST APIs</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
