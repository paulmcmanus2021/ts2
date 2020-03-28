import React, { Fragment } from 'react';
import ProductItem from './ProductItem';

function ProductList(props){

  const productList = props.products.map((product, index) => {
    return (
      <ProductItem
        key={index}
        id={product.id}
        name={product.name}
        price={product.price}
        position={index+1}
        description={product.description}
        sku={product.sku}
        images={product.images}
        >
      </ProductItem>
    )
  })

  return(
    <Fragment>
      <div className="product-list">
        {productList}
      </div>
    </Fragment>

  )
}

export default ProductList;
