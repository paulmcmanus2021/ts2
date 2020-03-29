import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ProductItem from '../components/ProductItem';
import Picture from '../components/ProductPageComponents/Picture';
import Description from '../components/ProductPageComponents/Description';
import OtherTop40 from '../components/ProductPageComponents/OtherTop40';



function ProductPageContainer(props){
  return(
    <div className="product-page-container">
      <Picture />
      <Description />
      <OtherTop40 />
    </div>
    )
}

export default ProductPageContainer;
