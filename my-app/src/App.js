import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Auth from './components/Auth';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Redirect from="/" to="/auth" exact />
        <Route path="/auth" component={Auth} />
        <Route path="/events" component={null} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
