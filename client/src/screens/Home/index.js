import React from 'react';
import Logo from '../../components/Logo';
import Form from '../../components/Form';
import './style.css';

export default function Home() {
    return (
        <div className='container-index'>
            <div>
                <Logo></Logo>
            </div>
            <main>
                <Form></Form>
            </main>
        </div>
    );
}
