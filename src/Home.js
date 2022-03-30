import React from 'react';
import Cards from './Cards.js';
import Search from './Hamburger/Search.js';
import './Home.css';

const searchEnabled = (updateText) => {
  window.scrollTo(0, 0);
  return <Search updateText={updateText} />;
};

const reset = () => {
  var elements = document.getElementsByClassName('fav');
  for (var i = elements.length - 1; i >= 0; --i) {
    elements[i].className = 'notfav';
  }
};

const Home = ({
  posts,
  showSearchBar,
  showFavoriteCards,
  searchText,
  updateText,
}) => {
  return (
    <div className="home">
      {reset()}
      <div className="header" onClick={() => window.location.reload()}>
        best.
      </div>
      {showSearchBar ? searchEnabled(updateText) : null}
      <Cards
        lyricData={posts}
        searchText={searchText}
        showFavs={showFavoriteCards}
      />
    </div>
  );
};

export default Home;
