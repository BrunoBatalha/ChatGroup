import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faUserCircle, faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import GroupList from '../../components/GroupList';
import Conversation from '../../components/Conversation';
import NewGroup from '../../components/NewGroup';
import api from '../../services/api';

import io from 'socket.io-client';
const socket = io('http://localhost:3333/');

export default function Chat() {

    const history = useHistory()

    const [showGroups, setShowGroup] = useState(true);
    const [showModal, setShowModal] = useState(true);

    const [groupList, setGroupList] = useState([]);
    const [groupMessages, setGroupMessages] = useState([]);

    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('')
    const [currentGroup, setCurrentGroup] = useState({ name: '', id: '', author: '' });

    useEffect(() => {
        configScroll();
        setUsername(sessionStorage.getItem('username'));
        sessionStorage.removeItem('currentIdGroup')
        setCurrentGroup({
            name: 'Selecione um grupo...'
        });
        loadGroups();
    }, []);

    useEffect(() => {
        configScroll();
    }, [groupMessages])

    socket.on('loadGroups', () => loadGroups());

    function chooseGroup(selectGroup) {
        setCurrentGroup({
            name: selectGroup.name,
            id: selectGroup.id,
            author: ', criado por ' + selectGroup.author
        });
        sessionStorage.setItem('currentIdGroup', selectGroup.id);
    }

    function loadGroups() {
        api.post('groupList')
            .then(response => {
                setGroupList(response.data);
            })
            .catch(err => {
                console.log(err.message)
            });
    }

    function logout() {
        sessionStorage.clear();
        history.push('/');
    }

    function configAccount() {
        const logout = document.querySelector('.logout');
        logout.style.display = (logout.style.display == 'block') ? 'none' : 'block';
    }

    function handleSubmitSendMessage(e) {
        e.preventDefault();
        if (message.trim() !== '') {
            setMessage('')
            const messageObject = {
                author: username,
                content: message,
                idGroup: currentGroup.id
            }
            socket.emit('sendMessage', messageObject);
        }
    }

    function toggleGroup() {
        setShowGroup(!showGroups);
        const logoGroups = document.querySelector('.list-groups');
        logoGroups.classList.toggle('d-block', showGroups);
        document.body.classList.toggle('closeScroll', showGroups)
        configScroll()
    }

    function toggleModal() {
        setShowModal(!showModal);
        const modal = document.querySelector('.modal');
        modal.classList.toggle('d-block', showModal)
        document.body.classList.toggle('closeScroll', showModal);
    }


    return (
        <div className='container-general'>

            <aside className='container-dashboard'>
                <div className='profile'>
                    <div className='container-profile'>
                        <button className='container-logout' onClick={configAccount}>
                            <div >
                                <div className='circle'></div>
                                <div className='circle'></div>
                                <div className='circle'></div>
                            </div>
                            <div className='img-round'>
                                <FontAwesomeIcon icon={faUserCircle} />
                            </div>
                        </button>
                        <div className='logout'>
                            <ul>
                                <li>Conta</li>
                                <li>
                                    <button onClick={logout}>Sair da conta</button>
                                </li>
                            </ul>
                        </div>

                        <div className='datas'>
                            <p>{username}</p>
                        </div>
                    </div>
                    <div className='container-profile'>
                        <button className='btn-add-group' title='Novo grupo' onClick={toggleModal}>
                            {(showModal) ?
                                <FontAwesomeIcon icon={faPlus} />
                                :
                                <FontAwesomeIcon icon={faTimes} />
                            }
                        </button>

                        <NewGroup />

                        <button className='toggle-groups' title='Lista de grupos' onClick={toggleGroup}>
                            <div className='bar'></div>
                            <div className='bar'></div>
                            <div className='bar'></div>
                        </button>
                    </div>
                </div>

                <GroupList
                    list={groupList}
                    cbChooseGroup={newValue => chooseGroup(newValue)}
                    cbLoadMessages={messages => setGroupMessages(messages)}
                />

                <div className='logo-list' >
                    <i>
                        <FontAwesomeIcon icon={faComment} />
                    </i>
                    <h1>Chat<br />Group</h1>
                </div>

            </aside>
            <div className='container-chat'>
                <div className="info-group">
                    <div className='img-round'>
                        <FontAwesomeIcon icon={faCommentDots} />
                    </div>
                    <div className='text-group'>
                        <p>{currentGroup.name}{currentGroup.author}</p>
                    </div>
                </div>

                <Conversation
                    cbSetScroll={e => configScroll()}
                    groupMessages={groupMessages}
                    cbSetGroupMessages={newValue => setGroupMessages(newValue)}
                />

                <div className='container-input'>
                    <form onSubmit={handleSubmitSendMessage} className='form-send'>
                        <input
                            id='input-send'
                            type="text"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            autoComplete='off' />
                        <button className='btn-send'>
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

window.onload = function () {
    window.onresize = function () {
        configScroll()
    }
}

function configScroll() {
    const divConversation = document.querySelector('.container-conversation');
    const body = document.body;
    if (divConversation && body) {
        divConversation.scrollTop = divConversation.scrollHeight;
        body.scrollTop = body.scrollHeight;
        window.scrollTo(0, divConversation.scrollHeight)
    }
}