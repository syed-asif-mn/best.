import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ showSearch, showFavs }) => {
  const updateStates = (searchValue, favValue) => {
    showSearch(searchValue);
    showFavs(favValue);
  };

  return (
    <div className="navbar">
      <NavLink
        to=""
        activeclassname="active"
        onClick={() => updateStates(false, false)}
      >
        <i className="fi fi-rr-home"></i>
      </NavLink>
      <NavLink
        to="search"
        onClick={() => updateStates(true, false)}
        activeclassname="active"
      >
        <i className="fi fi-rr-search"></i>
      </NavLink>
      <NavLink
        to="favorite"
        onClick={() => updateStates(false, true)}
        activeclassname="active"
      >
        <i className="fi fi-rr-heart"></i>
      </NavLink>
      <NavLink to="contribute" activeclassname="active">
        <i className="fi fi-rr-edit"></i>
      </NavLink>
    </div>
  );
};

export default NavBar;
