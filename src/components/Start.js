import React from 'react';
import start from '../img/harry-potter-start.jpg';

export default function Start() {
    return (
        <div className="start">
            <h1>Welcome to Harry Potter`s world</h1>
            <img src={start} alt="start" />
        </div>
    )
}