import React from 'react';
import './Resume.css';

type ResumeProps = {
    onBack: () => void;
};

export const Experiments: React.FC<ResumeProps> = ({ onBack }) => {
    console.log("experiments");
    return (
        <section id="experiments">
            <div className="resume-container">
                <button className="resume-back" onClick={onBack}>
                    ← Back
                </button>
            </div>
            <h2> Experiments </h2>
        </section>
    );
}
