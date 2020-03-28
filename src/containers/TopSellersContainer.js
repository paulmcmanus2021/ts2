import React, { Component, Fragment } from 'react';
import ProductList from '../components/ProductList';

class TopSellersContainer extends Component {
  constructor(props){
    super(props);
      this.state = {
        products: []
      }
    }


    componentDidMount(){
    const { match: { params } } = this.props;
    let brand = `${params.brand}`;
    const baseUrl = "https://product-fetch-toolstop.herokuapp.com/top40/";


    if (brand === "undefined"){
      return (
      fetch(baseUrl)
      .then(res => res.json())
      .then(data => this.setState({products: data.data}))
      .catch(err => console.error)
    )} else {
      return (
        fetch(baseUrl + brand)
        .then(res => res.json())
        .then(data => this.setState({products: data.data}))
        .catch(err => console.error)
      )
    }
  }


  render(){

    if(this.state.products.length === 0) {
      return <p>Loading...</p>}


      return(
        <Fragment>
          <div className="top-sellers-page">
            <h1 className="top-sellers-title">Top Sellers</h1>
            <section className="product-list">
              <ProductList products={this.state.products} />
           </section>
          </div>
        </Fragment>
      )
    }
  }

  export default TopSellersContainer;
