import React from 'react';
import './Loader.css';

const Loader = () => (
  <div class="loader-page">
  <div class="container">
    <div class="preloader">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="shadow"></div>
  </div>
  <h3 class="loader-text">Getting you there...</h3>
  </div>
);

export default Loader;
