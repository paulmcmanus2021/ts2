import React, { Fragment } from 'react';
import Bahco from '../components/BrandLinks/Bahco';
import Bosch from '../components/BrandLinks/Bosch';
import Dewalt from '../components/BrandLinks/Dewalt';
import Evolution from '../components/BrandLinks/Evolution';
import Hikoki from '../components/BrandLinks/Hikoki';
import Makita from '../components/BrandLinks/Makita';
import Metabo from '../components/BrandLinks/Metabo';
import Stanley from '../components/BrandLinks/Stanley';
import { BrowserRouter as Router } from "react-router-dom";


const BrandsContainer = props => (
  <Fragment>
    <div className="brand-grid">
    <Router>
      <a href="/makitatop20"><Makita /></a>
      <a href="/dewalttop20"><Dewalt /></a>
      <a href="/hikokitop20"><Hikoki /></a>
      <a href="/boschtop20"><Bosch /></a>
      <a href="/bahcotop20"><Bahco /></a>
      <a href="/metabotop20"><Metabo /></a>
      <a href="/stanleytop20"><Stanley /></a>
      <a href="/evolutiontop20"><Evolution /></a>
    </Router >
    </div>
  </Fragment>
)


export default BrandsContainer;
