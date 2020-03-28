import React from 'react'

function ProductItem(props) {
  return(
    <div>
      <a href="/product/:id" >
        <h1 class="product-link">{props.position}. {props.name} - £{props.price.toFixed(2)}</h1>
      </a>
    </div>
  )
}

export default ProductItem;
