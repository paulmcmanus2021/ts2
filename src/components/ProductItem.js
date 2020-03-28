import React from 'react'

function ProductItem(props) {
  return(
    <div className="product-link">
      <a href="/product/:id" >
        <h1>{props.position}. {props.name} - £{props.price.toFixed(2)}</h1>
      </a>
    </div>
  )
}

export default ProductItem;
