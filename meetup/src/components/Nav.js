import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
function Nav() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> MeetUps</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-meetup">Create Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
