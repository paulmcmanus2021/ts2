import React from 'react'
import ProductPageContainer from '../containers/ProductPageContainer';

function ProductItem(props) {
  function handleClick(e){
    let baseUrl="/topsellers/product/";
    let productId=props.id;
    window.location=(baseUrl + productId);
  }



  return(
    <div>
      <a className="product-link" onClick={handleClick}>
        {props.position}. {props.name} - £{props.price.toFixed(2)}
      </a>
    </div>
  )

}

export default ProductItem;
