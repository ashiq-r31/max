import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ artist, state, dispatch }) {
  const primaryGenre = artist.genres.find(genre => genre.is_primary === 1);
  const createButton = !state.list[artist.id] ? (
    <button
      className="btn"
      onClick={() => dispatch({ type: "ADD_TO_LIST", payload: artist })}
    >
      Add
    </button>
  ) : (
    <button
      className="btn"
      onClick={() => dispatch({ type: "REMOVE_FROM_LIST", payload: artist })}
    >
      Remove
    </button>
  );

  return (
    <div className="card">
      <div className="col-20 img-container">
        <img className="img" src={artist.image} alt="artist" />
      </div>
      <div className="col-60">
        <h4 className="title">
          <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
        </h4>
        <p>{primaryGenre.name}</p>
      </div>
      <div className="col-20 btn-container">{createButton}</div>
    </div>
  );
}

export default Card;
