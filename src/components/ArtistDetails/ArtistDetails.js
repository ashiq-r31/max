import React, { useContext, useEffect } from "react";
import Context from "../../context";
import Card from "../shared/Card";
import Details from "./Details";
import { fetchApi } from "../../utils";

function ArtistDetails({ match }) {
  const { state, dispatch } = useContext(Context);
  const artistID = match.params.id;
  useEffect(() => {
    const getArtist = async artistID => {
      dispatch({ type: "LOADING" });
      try {
        const results = await fetchApi(`/artists/${artistID}`);
        dispatch({
          type: "GET_ARTIST_DETAIL_SUCCESS",
          payload: { id: artistID, detail: results.data }
        });
      } catch (e) {
        console.log("Error", e);
      }
    };

    const getSimilar = async artistID => {
      dispatch({ type: "LOADING" });
      try {
        const results = await fetchApi(`/artists/${artistID}/similar`);
        dispatch({
          type: "GET_SIMILAR_SUCCESS",
          payload: { id: artistID, similar: results.data }
        });
      } catch (e) {
        console.log("Error", e);
      }
    };

    getArtist(artistID);
    getSimilar(artistID);
  }, [artistID, dispatch]);

  const details = state.details[artistID];
  const related = state.similar[artistID];

  return details && related ? (
    <div>
      <h1>{details.name}</h1>
      <Details details={details[0]} />
      <br />
      <h3>Related artists</h3>
      <ul>
        {related.map((artist, i) => (
          <li key={i}>
            <Card artist={artist} state={state} dispatch={dispatch} />
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <p>Nothing to see here!</p>
  );
}

export default ArtistDetails;
