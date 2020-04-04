import React, { useState, useEffect } from 'react';
import SpeechBubbleReceive from '../SpeechBubbleReceive';
import SpeechBubbleSend from '../SpeechBubbleSend';
import './style.css';

import io from 'socket.io-client';
const socket = io('http://localhost:3333/');

export default function Conversation({ cbSetScroll, groupMessages, cbSetGroupMessages }) {

    const [messages, setMessages] = useState([]);

    socket.on('receiveMessage', messageObject => {
        if (sessionStorage.getItem('currentIdGroup') === messageObject.idGroup) {
            cbSetGroupMessages([...messages, messageObject]);
            //cbSetGroupMessages([...messages,messageObject])
        }
    });

    useEffect(() => {
        setMessages(groupMessages)
        cbSetScroll();
    }, [groupMessages]);

    return (
        <div className='container-conversation scroll'>
            {messages.map((msg, i) => {
                if (msg.author !== sessionStorage.getItem('username'))
                    return <SpeechBubbleReceive key={i} author={msg.author} content={msg.content} />
                else
                    return <SpeechBubbleSend key={i} content={msg.content} />
            })}
        </div>
    );

}