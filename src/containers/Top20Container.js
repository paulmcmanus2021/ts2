import React, { Component, Fragment } from 'react';
import ProductList from '../components/ProductList';

class Top20Container extends Component {
  constructor(props){
    super(props);
      this.state = {
        products: []
      }
    }

    componentDidMount(){
    const { match: { params } } = this.props;
    let brand = `${params.brand}`
    const baseUrl = "https://product-fetch-toolstop.herokuapp.com/top40/";
    fetch(baseUrl + brand)
    .then(res => res.json())
    .then(data => this.setState({products: data.data}))
    .catch(err => console.error);
  }


  render(){

    if(this.state.products.length === 0) {
      return <p>Loading...</p>}


      return(
        <Fragment>
          <div className="top-20-page">
            <h1 className="top-20-title">Top 20 Sellers</h1>
            <section className="product-list">
              <ProductList products={this.state.products} />
           </section>
          </div>
        </Fragment>
      )
    }
  }

  export default Top20Container;
