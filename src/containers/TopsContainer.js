import React, { Fragment } from 'react';
import Top40Banner from '../components/Top40Banner';
import BrandsContainer from './BrandsContainer';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function TopsContainer(props){
  return (
  <Fragment>
    <div className="tops-container">
      <Router>
        <h1>Top 40</h1>
        <Link to="/top40sellers"><Top40Banner /></Link>
        <BrandsContainer />
      </Router>
    </div>
  </Fragment>
);
}

export default TopsContainer;