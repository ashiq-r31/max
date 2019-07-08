import React, { useReducer } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Context from "./context";
import { initialState, reducer } from "./reducer";
import Header from "./components/Header";
import Home from "./components/Home";
import MyList from "./components/MyList";
import ArtistDetails from "./components/ArtistDetails";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={MyList} />
        <Route exact path="/artists/:id" component={ArtistDetails} />
      </Router>
    </Context.Provider>
  );
}

export default App;
