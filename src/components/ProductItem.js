import React from 'react'

function ProductItem(props) {
  return(
    <div>
      <a href="/topsellers/product/:id(testtext)">
        <h1 className="product-link">{props.position}. {props.name} - £{props.price.toFixed(2)}</h1>
      </a>
    </div>
  )
}

export default ProductItem;
