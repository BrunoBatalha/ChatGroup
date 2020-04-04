import React from 'react'
import './style.css';
export default function SpeechBubble({ content, author }) {
    return (
        <div className="row-receive">
            <div className='bubble'>
                <strong className='author'>{author}:</strong>
                <p>{content}</p>
            </div>
        </div>

    );
}