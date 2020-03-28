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
      <a href="/top20/makita"><Makita /></a>
      <a href="/top20/dewalt"><Dewalt /></a>
      <a href="/top20/hikoki"><Hikoki /></a>
      <a href="/top20/bosch"><Bosch /></a>
      <a href="/top20/bahco"><Bahco /></a>
      <a href="/top20/metabo"><Metabo /></a>
      <a href="/top20/stanley"><Stanley /></a>
      <a href="/top20/evolution"><Evolution /></a>
    </Router >
    </div>
  </Fragment>
)


export default BrandsContainer;
