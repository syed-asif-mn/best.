import React, { Suspense } from 'react';
import Search from './Hamburger/Search.js';
import './Home.css';
const Cards = React.lazy(() => import('./Cards.js'));

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
      <Suspense>
        <Cards
          lyricData={posts}
          searchText={searchText}
          showFavs={showFavoriteCards}
        />
      </Suspense>
    </div>
  );
};

export default Home;
