import React, { useState } from 'react';
import './Contribute.css';

const initialState = {
  lyric: '',
  source: '',
};

const Contribute = ({ inputData }) => {
  const [{ lyric, source }, setState] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const submit_by_tag = () => {
    if (lyric === '' || source === '') {
      alert('Invalid data entered');
    } else {
      inputData({ lyric: lyric, source: source });
      setInterval(() => alert('Submitted. Thanks for contributing🎉'), 500);
    }
  };

  return (
    <form className="contribute-form">
      <h2>Contribute</h2>
      <label>
        <div>lyric:</div>
        <textarea
          value={lyric}
          name="lyric"
          onChange={onChange}
          className="input-box"
          type="text"
          placeholder={'A single word can make a heart open'}
          required
        />
      </label>
      <label>
        <div>source:</div>
        <textarea
          value={source}
          name="source"
          onChange={onChange}
          className="input-box"
          type="text"
          placeholder={'Rachel Platten - Fight Song'}
          required
        />
        {(source !== '' || lyric !== '') && (
          <div
            className="search-help-text"
            onClick={() => setState({ ...initialState })}
          >
            Reset fields
          </div>
        )}
      </label>
      <button className="submit" onClick={submit_by_tag}>
        Submit
      </button>
    </form>
  );
};
export default Contribute;
