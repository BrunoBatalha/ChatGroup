import React from 'react';
import './static/css/global.css';
import Logo from './components/Logo';
import Form from './components/Form';

function App() {
  return (

    <div className='container-index'>
      <div>
        <Logo></Logo>
      </div>
      <main>
        <Form></Form>
      </main>
    </div>

  )
}

export default App;
