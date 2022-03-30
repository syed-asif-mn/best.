import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style.css';
import axios from 'axios';
import NavBar from './NavBar.js';
import Home from './Home.js';
import Loader from './Loader.js';
import Contribute from './Hamburger/Contribute.js';

const API_URL = 'https://alert-boatneck-butterkase.glitch.me/lyricdata';

export default function App() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showFavoriteCards, setShowFavoriteCards] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  const updateText = (text) => {
    setSearchText(text);
  };

  const showFavorites = (value) => {
    setShowFavoriteCards(value);
  };

  const showSearch = (value) => {
    setShowSearchBar(value);
  };

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const inputData = async (data) => {
    await axios
      .post(API_URL, data, {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const element = (text) => {
    return (
      <Home
        posts={posts}
        showSearchBar={showSearchBar}
        showFavoriteCards={showFavoriteCards}
        searchText={text}
        updateText={updateText}
      />
    );
  };

  return (
    <div>
      {posts.length > 0 ? (
        <div>
          <BrowserRouter>
            <NavBar showFavs={showFavorites} showSearch={showSearch} />
            <Routes>
              <Route path="" element={element('')}></Route>
              <Route path="search" element={element(searchText)}></Route>
              <Route path="favorite" element={element('')}></Route>
              <Route
                path="contribute"
                element={<Contribute inputData={inputData} />}
              ></Route>
            </Routes>
          </BrowserRouter>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
