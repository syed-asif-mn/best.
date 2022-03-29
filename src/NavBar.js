import { NavLink } from 'react-router-dom';
import './NavBar.css';
import React, { useState } from 'react';

const NavBar = ({ showSearch, showFavs }) => {
  const [search, setSearch] = useState(false);
  const [fav, showfav] = useState(false);

  const updateStates = (searchValue, favValue) => {
    updateSearchState(searchValue);
    updateFavState(favValue);
  }

  const updateSearchState = (value) => {
    setSearch(value);
    showSearch(value);
  };

  const updateFavState = (value) => {
    showfav(value);
    showFavs(value);
  };

  return (
    <div className="navbar">
      <NavLink to="/" activeClassName="active" onClick={() => updateStates(false,false)}>
        <i class="fi fi-rr-home"></i>
      </NavLink>
      <NavLink
        to="/search"
        onClick={() => updateStates(true, false)}
        activeClassName="active"
      >
        <i class="fi fi-rr-search"></i>
      </NavLink>
      <NavLink
        to="/favorite"
        onClick={() => updateStates(false, true)}
        activeClassName="active"
      >
        <i class="fi fi-rr-heart"></i>
      </NavLink>
      <NavLink to="/contribute" activeClassName="active">
        <i class="fi fi-rr-edit"></i>
      </NavLink>
    </div>
  );
};

export default NavBar;
