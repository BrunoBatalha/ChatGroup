import React from 'react';
import perfil from '../../static/img/background.jpg';
import './style.css';
export default function Chat({ list }) {
    return (
        <div className="list-groups scroll">
            <ul>
                {list.map((element, i) => (
                    <li key={i}>
                        <div className='container-img'>
                            <div className='img-round'>
                                <img src={perfil} alt='foto_perfil' width='40px' height='40px' />
                            </div>
                        </div>
                        <button className='btn-group'>{element.nome}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}