import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ showSearch, showFavs }) => {
  const updateStates = (searchValue, favValue) => {
    showSearch(searchValue);
    showFavs(favValue);
  };

  return (
    <div className="navbar">
      <Link
        to=""
        activeClassName="active"
        onClick={() => updateStates(false, false)}
      >
        <i className="fi fi-rr-home"></i>
      </Link>
      <Link
        to="search"
        onClick={() => updateStates(true, false)}
        activeClassName="active"
      >
        <i className="fi fi-rr-search"></i>
      </Link>
      <Link
        to="favorite"
        onClick={() => updateStates(false, true)}
        activeClassName="active"
      >
        <i className="fi fi-rr-heart"></i>
      </Link>
      <Link to="contribute" activeClassName="active">
        <i className="fi fi-rr-edit"></i>
      </Link>
    </div>
  );
};

export default NavBar;
