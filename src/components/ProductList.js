import React, { Fragment } from 'react';
import ProductItem from './ProductItem';

function ProductList(props){

  const productList = props.products.map((product, index) => {
    return (
      <ProductItem key={index} name={product.name} price={product.price} position={index+1} ></ProductItem>
    )
  })

  return(
    <Fragment>
      {productList}
    </Fragment>

  )
}

export default ProductList;
