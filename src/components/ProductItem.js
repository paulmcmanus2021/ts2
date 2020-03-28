import React from 'react'

function ProductItem(props) {
  return(
    <h1>{props.position}. {props.name} - £{props.price.toFixed(2)}</h1>
  )
}

export default ProductItem;
