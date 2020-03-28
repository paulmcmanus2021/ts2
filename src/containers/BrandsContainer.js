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
      <a href="/topsellers/makita"><Makita /></a>
      <a href="/topsellers/dewalt"><Dewalt /></a>
      <a href="/topsellers/hikoki"><Hikoki /></a>
      <a href="/topsellers/bosch"><Bosch /></a>
      <a href="/topsellers/bahco"><Bahco /></a>
      <a href="/topsellers/metabo"><Metabo /></a>
      <a href="/topsellers/stanley"><Stanley /></a>
      <a href="/topsellers/evolution"><Evolution /></a>
    </Router >
    </div>
  </Fragment>
)


export default BrandsContainer;
