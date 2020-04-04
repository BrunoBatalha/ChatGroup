import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './screens/Home';
import Chat from './screens/Chat';
import {isAuthenticated} from './services/auth'
import './static/css/global.css';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const flag =  isAuthenticated();
  return (
    <Route {...rest} render={props => flag ?
      (<Component {...props} />) :
      (<Redirect to={{ pathname: "/", state: { from: props.location } }} />)
    }
    />
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <PrivateRoute path="/chat" component={Chat} />
      </Switch>
    </BrowserRouter>
  );
}
