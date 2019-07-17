import React, { useContext, useState, useEffect } from "react";
import Context from "../../context";
import Card from "../shared/Card";
import "./Home.css";
import { fetchApi, debounce } from "../../utils";

function Home() {
  const { state, dispatch } = useContext(Context);
  const [searchText, updateSearch] = useState("");

  useEffect(() => {
    return function cleanup() {
      dispatch({ type: "RESET_ARTISTS" });
    };
  }, [dispatch]);

  const getGenres = async keyword => {
    updateSearch(keyword);
    if (keyword.length === 0) {
      dispatch({ type: "RESET_GENRES" });
      return;
    }
    try {
      const results = await fetchApi(`/genres?q=${keyword}`);
      dispatch({ type: "GET_GENRES_SUCCESS", payload: results.data });
    } catch (e) {
      console.log("Error", e);
    }
  };

  const getArtists = async genreID => {
    dispatch({ type: "RESET_GENRES" });
    try {
      const results = await fetchApi(`/genres/${genreID}/artists`);
      dispatch({ type: "GET_ARTISTS_SUCCESS", payload: results.data });
    } catch (e) {
      console.log("Error", e);
    }
  };

  const debounceSearch = debounce(value => getGenres(value), 500);

  return (
    <div>
      <h1>MAX</h1>
      <h3>Enter a genre to find artists</h3>
      <input
        className="search"
        id="search"
        type="text"
        onKeyUp={e => e.keyCode === 13 && getGenres(e.target.value)}
        onChange={e => debounceSearch(e.target.value)}
      />

      {state.genres.length > 0 && <h4>Showing results for: "{searchText}"</h4>}

      <ul>
        {state.genres.map((genre, i) => (
          <li key={i} className="genre" onClick={() => getArtists(genre.id)}>
            {genre.name}
          </li>
        ))}
      </ul>

      <ul>
        {state.artists.map((artist, i) => (
          <li key={i}>
            <Card artist={artist} state={state} dispatch={dispatch} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
