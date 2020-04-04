import React, { useState } from 'react';
import Input from '../Input';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import './style.css';

import api from '../../services/api';

import io from 'socket.io-client';
const socket = io('http://localhost:3333/');

export default function NewGroup() {

    const [newGroup, setNewGroup] = useState('');
    const [canSend, setCanSend] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        if (canSend) {
            setCanSend(false)
            const data = { name: newGroup, author: sessionStorage.getItem('username') };
            api.post('createGroup', data)
                .then(response => {
                    if (response.data === 'Grupo existente.') {
                        alert('Um grupo com este nome já existe.')
                    } else {
                        socket.emit('newGroup')
                        setNewGroup('');
                        alert(`Grupo ${response.data.name} criado!`);
                    }
                    setCanSend(true)
                })
                .catch(err => {
                    console.log(err);
                    setCanSend(false)
                });
        }
    }

    return (
        <div className="modal">
            <form onSubmit={handleSubmit} className='form-style'>
                <Input
                    icon={faComments}
                    label='Novo grupo'
                    name='newGroup'
                    type='text'
                    value={newGroup}
                    onChange={e => setNewGroup(e.target.value)}
                    placeholder='Ex..: Notícias' 
                    maxLength="15"/>
                <input type='submit' value='Criar' />

            </form>
        </div>
    );
}