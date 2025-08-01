import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style.css';
import axios from 'axios';
const NavBar = React.lazy(() => import('./NavBar.js'));
const Home = React.lazy(() => import('./Home.js'));
import Loader from './Loader.js';
import Contribute from './Hamburger/Contribute.js';

const API_URL = 'https://gist.githubusercontent.com/syed-asif-mn/c27eef71f0c9e4e0f8534664e790a87c/raw/863ebcf86626fba882f5beef97b361b2528d4f31/lyrics.json';

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
    await axios.get(API_URL)
      .then((res) => console.log(res))
      .catch((err) => alert(err));
  };

  const element = (text) => {
    return (
      <Suspense fallback={<Loader />}>
        <Home
          posts={posts}
          showSearchBar={showSearchBar}
          showFavoriteCards={showFavoriteCards}
          searchText={text}
          updateText={updateText}
        />
      </Suspense>
    );
  };

  return (
    <div>
      {posts.length > 0 ? (
        <div>
          <BrowserRouter>
          <Suspense fallback={<div></div>}>
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
            </Suspense>
          </BrowserRouter>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
