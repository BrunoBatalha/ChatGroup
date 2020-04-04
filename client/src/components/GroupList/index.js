import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import './style.css';
import api from '../../services/api';

import io from 'socket.io-client';
const socket = io('http://localhost:3333/');

export default function Chat({ list = [], cbChooseGroup, cbLoadMessages }) {

    function selectGroup({ name, author, _id }) {
        cbChooseGroup({ name, author, id: _id });
        const data = { idGroup: _id, idSocket: socket.id }
        api.post('/loadMessages', data)
            .then(response => {
                console.log(response)
                cbLoadMessages(response.data);
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="list-groups scroll">
            <ul>
                {list.map((element, i) => (
                    <li key={i} className={element._id === sessionStorage.getItem('currentIdGroup') ? 'choose-group' : ''}>
                        <div className='container-img'>
                            <div className='img-round'>
                                <FontAwesomeIcon icon={faCommentDots} />
                            </div>
                        </div>
                        <button className='btn-group' onClick={e => selectGroup(element)}>
                            {element._id === sessionStorage.getItem('currentIdGroup') ?
                                (<strong>{element.name}</strong>)
                                :
                                (element.name)
                            }
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}