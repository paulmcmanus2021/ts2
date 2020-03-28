import React, { Component, Fragment } from 'react';
import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';

class Top40Container extends Component {
  constructor(props){
    super(props);
      this.state = {
        products: [],
        currentPage: 1,
        productsPerPage: 10
      }
    }

    componentDidMount(){
    const url = "https://product-fetch-toolstop.herokuapp.com/top40"
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({products: data.data}))
    .catch(err => console.error);
  }


  render(){

    if(this.state.products.length === 0) {
      return <p>Loading...</p>}

      const indexOfLastProduct = this.state.currentPage * this.state.productsPerPage;
      const indexOfFirstProduct = indexOfLastProduct - this.state.productsPerPage;
      const currentProducts = this.state.products.slice(indexOfFirstProduct, indexOfLastProduct);

      const paginate = (pageNumber) => {this.setState({currentPage: pageNumber})
  }

      return(
        <Fragment>
        <div className="top-40-page">
          <h1 className="top-40-title">Top 40 Sellers</h1>
          <section className="product-list">
            <ProductList products={this.state.products} />
         </section>
        </div>
        </Fragment>
      )
    }
  }

  export default Top40Container;
