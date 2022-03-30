import React from 'react';
import './Loader.css';

const Loader = () => (
  <div className="loader-page">
  <div className="loader-container">
    <div className="preloader">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="shadow"></div>
  </div>
  <h3 className="loader-text">Getting you there...</h3>
  </div>
);

export default Loader;
