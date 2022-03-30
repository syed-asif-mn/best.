import React from 'react';
import Card from './Card';
import './Cards.css';

var FavCards = [];

const Cards = ({ lyricData, searchText, showFavs }) => {
  const showCards = (source) => {
    source = shuffle(source);
    return (
      <div className="cards">
        {source.map((obj, key) => (
          <div key={key}>
            <Card
              fav={showFavs ? true : false}
              {...obj}
              setFavCards={setFavoriteCards}
            />
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
    var filteredLyric = lyricData.filter(
      (item) =>
        item['lyric']
          .replace(/\s/g, '')
          .toLowerCase()
          .includes(searchText.replace(/\s/g, '').toLowerCase()) ||
        item['source']
          .replace(/\s/g, '')
          .toLowerCase()
          .includes(searchText.replace(/\s/g, '').toLowerCase())
    );

    if (filteredLyric.length == 0) {
      return (
        <div>
          <div className="oops">
            Oops! Your search did not yield results. You might like these:
          </div>
          {showCards(lyricData)}
        </div>
      );
    } else {
      return showCards(filteredLyric);
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
      return <div>{showCards(FavCards)}</div>;
    }
  }

  if (searchText == '' || !showFavs) {
    return (
      <div>
        <div>{showCards(lyricData)}</div>
      </div>
    );
  }
};

export default Cards;
