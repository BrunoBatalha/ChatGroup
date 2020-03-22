import React from 'react'
import './style.css';
export default function SpeechBubble({ content }) {
    return (
        <div className='row-send'>
            <div className='bubble-send'>
                <p>{content}</p>
            </div>
        </div>

    );
}