import React, { Fragment } from 'react';
import Bahco from '../components/BrandLinks/Bahco';
import Bosch from '../components/BrandLinks/Bosch';
import Dewalt from '../components/BrandLinks/Dewalt';
import Evolution from '../components/BrandLinks/Evolution';
import Hikoki from '../components/BrandLinks/Hikoki';
import Makita from '../components/BrandLinks/Makita';
import Metabo from '../components/BrandLinks/Metabo';
import Stanley from '../components/BrandLinks/Stanley';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


const BrandsContainer = props => (
  <Fragment>
    <div className="brand-grid">
    <Router>
      <Link to="/makitatop20"><Makita /></Link>
      <Link to="/dewalttop20"><Dewalt /></Link>
      <Link to="/hikokitop20"><Hikoki /></Link>
      <Link to="/boschtop20"><Bosch /></Link>
      <Link to="/bahcotop20"><Bahco /></Link>
      <Link to="/metabotop20"><Metabo /></Link>
      <Link to="/stanleytop20"><Stanley /></Link>
      <Link to="/evolutiontop20"><Evolution /></Link>
    </Router >
    </div>
  </Fragment>
)


export default BrandsContainer;
