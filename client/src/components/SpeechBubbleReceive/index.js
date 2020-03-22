import React from 'react'
import './style.css';
export default function SpeechBubble({ content }) {
    return (
        <div className="row-receive">
            <div className='bubble'>
                <p>{content}</p>
            </div>
        </div>

    );
}