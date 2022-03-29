import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import './Search.css';

const Search = ({ updateText }) => {
  const [text, setText] = useState('');
  const [debouncedValue] = useDebounce(text, 500);

  useEffect(() => {
    setText(debouncedValue);
    updateText(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className = "search-container">
    <fieldset className="search-border">
      <div>
        <input
          value={text}
          type="text"
          className="search-inside"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        {text !== '' && (
            <div className="search-help-text" onClick={() => setText('')}>
              Reset search
            </div>
        )}
      </div>
      <legend>Search lyric/artist</legend>
    </fieldset>
    </div>
  );
};

export default Search;
