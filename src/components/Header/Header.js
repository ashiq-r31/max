import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      {props.location.pathname !== "/" && (
        <Link className="nav-link back-to-search" to="/">
          &#8592; Back to Search
        </Link>
      )}
      {props.location.pathname !== "/list" && (
        <Link className="nav-link my-list" to="/list">
          My List
        </Link>
      )}
    </div>
  );
}

export default withRouter(Header);
