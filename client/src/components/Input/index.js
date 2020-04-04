import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

function FormRegister({ icon, label, name, type, placeholder,onChange,value, maxLength}) {
    return (
        <div className="input-block">
            <label htmlFor={name}><i><FontAwesomeIcon icon={icon} /></i>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                autoComplete='off'
                value={value}
                onChange={onChange} 
                maxLength={maxLength}
                required/>
        </div>
    )
}

export default FormRegister;