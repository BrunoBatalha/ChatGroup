import React from 'react';
import './style.css';
import perfil from '../../static/img/background.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughBeam } from '@fortawesome/free-regular-svg-icons';
import GroupList from '../../components/GroupList';
import Conversation from '../../components/Conversation';

const json = [
    {nome: 'Zuera.com'},
    {nome: 'Informações'},
    {nome: 'Grupo top'},
    {nome: 'Programados'},
    {nome: 'Jobs'},
    {nome: 'O que é, o que é?'},
    {nome: 'Grupo de informações'},
    {nome: 'O que é, o que é?'},
    {nome: 'Grupo de informações'},
    {nome: 'O que é, o que é?'},
    {nome: 'Grupo de informações'},
    {nome: 'O que é, o que é?'},
    {nome: 'Grupo de informações'},
    {nome: 'O que é, o que é?'},
    {nome: 'Grupo de informações'},
    {nome: 'O que é, o que é?'},
    {nome: 'Grupo de informações'},
    {nome: 'Grupo de informações'},
    {nome: 'Grupo de informações'}
];


export default function Chat() {
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
                </div>
                <GroupList list={json}/>
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

                <Conversation/>

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