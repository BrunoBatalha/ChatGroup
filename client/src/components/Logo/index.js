import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import './style.css';

function Logo() {
    return (
        <div className='container-logo'>
            <i><FontAwesomeIcon icon={faComment} /></i>
            <h1>Chat<br />Group</h1>
        </div>
    )
}

export default Logo;