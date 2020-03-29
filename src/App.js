import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import ProductPageContainer from './containers/ProductPageContainer';
import TopSellersContainer from './containers/TopSellersContainer';
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
              <Route exact path="/topsellers/product/:id" component={ProductPageContainer}></Route>
              <Route exact path="/topsellers" component={TopSellersContainer}></Route>
              <Route path="/topsellers/:brand" component={TopSellersContainer}></Route>
              <Route path="" component={HomeContainer}></Route>
            </Switch>
          <Footer />
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App;
