import React from "react";
import "./style.css"

const Nav = (props) => (
  <nav className="navbar">
    <ul>
        <li className="brand" href="/">
            Clicky Game
        </li>
        <li className="" href="/">
            {props.message}
        </li>
        <li className="" href="/">
            Score {props.score}, Top Score {props.topScore}
        </li>
    </ul>
  </nav>
);

export default Nav;
