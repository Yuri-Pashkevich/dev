import React from 'react';
import '../styles/CV.scss';

export const CV = () => {
    return (
        <div className="cv">
            Follow the link below to view my CV.
            Please feel free to contact me
            <a className="cv-link" href="https://docs.google.com/document/d/1YmwLHjM7SWtmkjznKmY005I2s25ppoQN6Q_84zZ_L6A/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                view CV
            </a>
        </div>
    )
}