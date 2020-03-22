import React from 'react';
import SpeechBubbleReceive from '../SpeechBubbleReceive';
import SpeechBubbleSend from '../SpeechBubbleSend';
import './style.css';


export default function Conversation() {
    return (
        <div className='container-conversation scroll'>
            <SpeechBubbleReceive content='Primeiro'/>
            <SpeechBubbleSend content='SegundoSegundoSegundoSegundoSegundoSegundoSegundoSegundoSegundoSegundoSegundoSegundoSegundoSegundo'/>
            <SpeechBubbleReceive content='ConteudoConteudoConteudoConteudo'/>
            <SpeechBubbleReceive content='ConteudoConteudoConteudoConteudoConteudoConteudoConteudoConteudoConteudo'/>
            <SpeechBubbleReceive content='Conteudo'/>
            <SpeechBubbleReceive content='Conteudo'/>
            <SpeechBubbleReceive content='Conteudo'/>
            <SpeechBubbleReceive content='Conteudo'/>
            <SpeechBubbleReceive content='Conteudo'/>
            <SpeechBubbleReceive content='Conteudo'/>
            <SpeechBubbleReceive content='Conteudo'/>
            <SpeechBubbleReceive content='Conteudo'/>
            <SpeechBubbleReceive content='Conteudo'/>
            <SpeechBubbleReceive content='Conteudo'/>
            <SpeechBubbleReceive content='Conteudo'/>
            <SpeechBubbleReceive content='Conteudo'/>
            <SpeechBubbleReceive content='Conteudo'/>
            <SpeechBubbleReceive content='Conteudo'/>
            <SpeechBubbleReceive content='Conteudo'/>
            <SpeechBubbleReceive content='Conteudo'/>
            <SpeechBubbleReceive content='Conteudo'/>
            <SpeechBubbleReceive content='Conteudo'/>
            <SpeechBubbleReceive content='Ultimo'/>
        </div>
    );
}