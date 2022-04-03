import React, { useState } from 'react';
import './Card.css';

var favArray = [];

const background = () => {
  var r = Math.round(Math.random() * 255);
  var g = Math.round(Math.random() * 255);
  var b = Math.round(Math.random() * 255);
return `rgba(${r},${g},${b},0.2)`;
}

const searchSource = (id) => {
  window.open(`https://www.google.com/search?q=${id}`);
};

const Card = (props) => {
  const [isFavorite, setFavorite] = useState(props.fav);
  
   const handleToggle = (props) => {
    var index = -1;
    index = favArray.findIndex((x) => x.lyric === props.lyric);
    if (index != -1) favArray.splice(index, 1);
    if (!props.fav) {
      favArray.push({ lyric: props.lyric, source: props.source });
    }
    if ((props.fav && !isFavorite) || (!props.fav && isFavorite)) {
      favArray.splice(index, 1);
    }
    
    setFavorite(!isFavorite);
    props.setFavCards(favArray);
  };

  return (
    <div key={props.key} className="card" style={{background: background()}}>
      <h1
        onClick={() => {
          searchSource(props.source);
        }}
      >
        "{props.lyric}"
      </h1>
      <div className="small-elements">
        <h3
          className="source"
          onClick={() => {
            searchSource(props.source);
          }}
        >
          {props.source}
        </h3>
        <button
          className={isFavorite ? 'fav' : 'notfav'}
          onClick={() => {
            handleToggle(props);
          }}
        ></button>
      </div>
    </div>
  );
};

export default Card;
