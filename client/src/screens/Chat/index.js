import React, { useState, useEffect } from 'react';
import './style.css';
import perfil from '../../static/img/background.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughBeam, faComment, faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import GroupList from '../../components/GroupList';
import Conversation from '../../components/Conversation';
import NewGroup from '../../components/NewGroup';

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
    { nome: 'Grupo de informações' },
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
    { nome: 'Ultimo' }
];


export default function Chat() {

    const [showGroups, setShowGroup] = useState(true);
    const [showModal, setShowModal] = useState(true);

    function toggleGroup() {
        setShowGroup(!showGroups);
        const logoGroups = document.querySelector('.list-groups');
        logoGroups.classList.toggle('d-block', showGroups);
        document.body.classList.toggle('closeScroll', showGroups)
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
                    <div className='img-round'>
                        <img src={perfil} alt='foto_perfil' width='40px' height='40px' />
                    </div>

                    <div className='datas'>
                        <p>Bruno Batalha</p>
                    </div>

                    <button className='btn-add-group' onClick={toggleModal}>
                        {(showModal) ?
                            <FontAwesomeIcon icon={faCommentDots} />
                            :
                            <FontAwesomeIcon icon={faBackspace} />
                        }
                    </button>

                    <NewGroup />

                    <button className='toggle-groups' onClick={toggleGroup}>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                    </button>

                </div>

                <GroupList list={json} />

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
                        <img src={perfil} alt='foto_perfil' width='40px' height='40px' />
                    </div>
                    <div className='text-group'>
                        <p><strong>Zuera.com</strong><br />
                            Fulano, Sicrano, Beltrano...</p>
                    </div>
                </div>

                <Conversation />

                <div className='container-input'>
                    <i>
                        <FontAwesomeIcon icon={faLaughBeam} />
                    </i>
                    <input type="text" />
                </div>
            </div>
        </div>
    );
}