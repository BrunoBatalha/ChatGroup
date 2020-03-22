import React from 'react';
import SpeechBubble from '../SpeechBubble';
import './style.css';

const json = [
    { nome: 'Zuera.com' },
    { nome: 'Informações' },
    { nome: 'Grupo top' },
    { nome: 'Programados' },
    { nome: 'Jobs' },
    { nome: 'O que é, o que é?' },
    { nome: 'Grupo de informações' },
    { nome: 'O que é, o que é?' },
    { nome: 'Grupo de informações' },
    { nome: 'O que é, o que é?' },
    { nome: 'Grupo de informações' },
    { nome: 'O que é, o que é?' },
    { nome: 'Grupo de informações' },
    { nome: 'O que é, o que é?' },
    { nome: 'Grupo de informações' },
    { nome: 'O que é, o que é?' },
    { nome: 'Grupo de informações' },
    { nome: 'Grupo de informações' },
    { nome: 'Grupo de informações' }
];


export default function Conversation() {
    return (
        <div className='container-conversation scroll'>
            <SpeechBubble />
            <SpeechBubble />
            <SpeechBubble />
            <SpeechBubble />
            <SpeechBubble />
            <SpeechBubble />
            <SpeechBubble />
            <SpeechBubble />
            <SpeechBubble />
            <SpeechBubble />
            <SpeechBubble />
        </div>
    );
}