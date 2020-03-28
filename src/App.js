import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import Top40Container from './containers/Top40Container';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeContainer}></Route>
          <Route path="/top40sellers" component={Top40Container}></Route>
          <Route path="" component={HomeContainer}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
