import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopsContainer from './TopsContainer';

const HomeContainer = () => {
  return (
    <div className="home-container">
      <Header />
      <TopsContainer />
      <Footer />
    </div>
  )
}

export default HomeContainer;
