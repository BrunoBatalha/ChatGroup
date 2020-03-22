import React from 'react';
import Input from '../Input';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import './style.css';

export default function NewGroup() {
    return (
        <div className="modal">
            <form>
                <Input
                    icon={faComments}
                    label='Novo grupo'
                    name='new_group'
                    type='text'
                    placeholder='Ex..: Notícias' />
                <input type='submit' value='Criar' />

            </form>
        </div>
    );
}