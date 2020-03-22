import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Chat from './screens/Chat';
import './static/css/global.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/chat' exact component={Chat} />
      </Switch>
    </BrowserRouter>
  );
}


