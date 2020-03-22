import React from 'react';
import { useHistory } from "react-router-dom";
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import Input from '../Input';
import './style.css';

export default function Form() {
    const history = useHistory();
    
    function openSignIn() {
        const fSignIn = document.getElementById('form-sign-in');
        const fSignUp = document.getElementById('form-sign-up');
        document.title = 'Bem vindo';
        changeFormDisplay(fSignIn, fSignUp);
    }
    function openSignUp() {
        const fSignIn = document.getElementById('form-sign-in');
        const fSignUp = document.getElementById('form-sign-up');
        changeFormDisplay(fSignUp, fSignIn);
    }
    function changeFormDisplay(show, hide) {
        show.style.display = 'block';
        hide.style.display = 'none';
    }

    function handleSubmit(e){
        e.preventDefault();
        history.push('/chat');
    }

    return (
        <>
            <form id='form-sign-in' onSubmit={handleSubmit}>
                <div className='inputs'>
                    <p>Entrar</p>
                    <Input
                        icon={faUser}
                        label='Nome de usuário'
                        name='username'
                        type='text'
                        placeholder='Ex... : Bruno09' />
                    <Input
                        icon={faKey}
                        label='Senha'
                        name='password'
                        type='password'
                        placeholder='No minímo 6 caracteres' />
                    <input type="checkbox" id='chk-pass-sign-in' />Mostrar senha
                    <button type="submit" className='btn-form'>Entrar</button>
                    <span onClick={openSignUp}>Cadastrar-se</span>
                </div>
            </form>
            <form id='form-sign-up' style={{ display: 'none' }}>
                <div className='inputs'>
                    <p>Cadastro</p>
                    <Input
                        icon={faUser}
                        label='Nome de usuário'
                        name='username'
                        type='text'
                        placeholder='Ex... : Bruno09' />
                    <Input
                        icon={faKey}
                        label='Senha'
                        name='password'
                        type='password'
                        placeholder='No minímo 6 caracteres' />
                    <Input
                        icon={faKey}
                        label='Confirmar senha'
                        name='confirm-password'
                        type='password'
                        placeholder='No minímo 6 caracteres' />
                    <input type="checkbox" id='chk-pass-sign-up' />Mostrar senha
                    <button type="submit" className='btn-form'>Cadastrar-se</button>
                    <span onClick={openSignIn}>Entrar</span>
                </div>
            </form>
        </>
    )

}

window.onload = () => {
    const chkSignUp = document.getElementById('chk-pass-sign-up');
    const chkSignIn = document.getElementById('chk-pass-sign-in');

    if (chkSignUp && chkSignIn) {
        chkSignIn.onchange = handleVisibilityPwd;
        chkSignUp.onchange = handleVisibilityPwd;
    }

    function handleVisibilityPwd(e) {
        const queryPwd = document.querySelectorAll('input[name="password"]');
        const queryConfPwd = document.querySelectorAll('input[name="confirm-password"]');
        if (e.target.checked) {
            chkSignIn.checked = true;
            chkSignUp.checked = true;
            queryPwd.forEach(item => item.type = 'text');
            queryConfPwd.forEach(item => item.type = 'text');
        } else {
            chkSignIn.checked = false;
            chkSignUp.checked = false;
            queryPwd.forEach(item => item.type = 'password');
            queryConfPwd.forEach(item => item.type = 'password');
        }
    }
}
