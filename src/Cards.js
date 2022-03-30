import React from 'react';
import Card from './Card';
import './Cards.css';

var FavCards = [];

const Cards = ({ lyricData, searchText, showFavs }) => {
  const showCards = (source, fav) => {
    if (!fav) source = shuffle(source);
    return (
      <div>
        {source.map((obj, key) => (
          <div key={key}>
            <Card fav={fav} {...obj} setFavCards={setFavoriteCards} />
          </div>
        ))}
      </div>
    );
  };

  const shuffle = (array) => {
    let qty = array.length,
      temp,
      i;
    while (qty) {
      i = Math.floor(Math.random() * qty--);
      temp = array[qty];
      array[qty] = array[i];
      array[i] = temp;
    }
    return array;
  };

  const setFavoriteCards = (arr) => {
    FavCards = arr;
  };

  if (searchText !== '') {
    var searchSource = lyricData;
    if (showFavs) searchSource = FavCards;
    var filteredLyric = searchSource.filter(
      (item) =>
        item['lyric'].toLowerCase().includes(searchText) ||
        item['source'].toLowerCase().includes(searchText)
    );

    if (filteredLyric.length == 0) {
      return (
        <div>
          <div className="oops">
            Oops! Your search did not yield results. You might like these:
          </div>
          {showCards(lyricData, false)}
        </div>
      );
    } else {
      return showCards(filteredLyric, false);
    }
  }

  if (showFavs) {
    if (FavCards.length == 0) {
      return (
        <div>
          <div className="oops">
            You have not liked anything yet. Don't forget to hit ❤️ for your
            favorite lyrics.
          </div>
          <div className="loader">
            <div className="loader-inner">
              <span></span>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>{showCards(FavCards, true)}</div>;
    }
  }

  if (searchText == '' || !showFavs) {
    return (
      <div>
        <div>{showCards(lyricData, false)}</div>
      </div>
    );
  }
};

export default Cards;
