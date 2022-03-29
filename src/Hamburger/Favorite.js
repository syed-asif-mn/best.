import React, { useState } from 'react';
import './Favorite.css';

const Favorite = ({ updateState, showFavorites }) => {
  const [text, setText] = useState('Favorites');

  const updateText = () => {
    if (text == 'Favorites') {
      setText('Hide Favorites');
      showFavorites(true);
    }
    else{
      setText('Favorites');
      showFavorites(false);
    }
  };

  return (
        <div
          className="favorite"
          onClick={() => {
            updateText();
            updateState();
          }}
        >
          {text}
        </div>
  );
};

export default Favorite;
