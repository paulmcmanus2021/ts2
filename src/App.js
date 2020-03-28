import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import Top40Container from './containers/Top40Container';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
            <Switch>
              <Route exact path="/" component={HomeContainer}></Route>
              <Route path="/top40sellers" component={Top40Container}></Route>
              <Route path="" component={HomeContainer}></Route>
            </Switch>
          <Footer />
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App;
