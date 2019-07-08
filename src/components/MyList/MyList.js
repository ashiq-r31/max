import React, { useContext } from "react";
import Context from "../../context";
import Card from "../shared/Card";

function MyList() {
  const { state, dispatch } = useContext(Context);
  const keys = Object.keys(state.list);
  return (
    <div>
      <h1>My List</h1>
      {keys.length > 0 ? (
        keys.map((id, i) => (
          <Card
            key={i}
            artist={state.list[id]}
            state={state}
            dispatch={dispatch}
          />
        ))
      ) : (
        <p>Nothing to see here!</p>
      )}
    </div>
  );
}

export default MyList;
