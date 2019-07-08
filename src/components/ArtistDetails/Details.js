import React from "react";
import "./Details.css";

function Details({ details }) {
  const primaryGenre = details.genres.find(genre => genre.is_primary === 1);
  const otherGenres = details.genres.filter(genre => genre.is_primary !== 1);
  return (
    <div>
      <div className="detail">
        <div className="col-20 img-container">
          <img className="img" src={details.image} alt="thumb" />
        </div>
        <div className="col-60">
          <h4 className="title">Popularity</h4>
          <p>{details.popularity}</p>
          <h4 className="title">Primary genre</h4>
          <p>{primaryGenre.name}</p>
        </div>
      </div>
      <div>
        <h4 className="title">Additional genres</h4>
        <p>{otherGenres.map(genre => genre.name).join(", ") || "None"}</p>
      </div>
    </div>
  );
}

export default Details;
