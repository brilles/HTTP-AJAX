import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-wrapper">
      <h2>What would you like to do?</h2>
      <div className="links">
        <Link to="/friends">View Friends</Link>
        <Link to="/addfriend">Add Friend</Link>
        <Link to="/updatefriend">Update Friend</Link>
      </div>
    </div>
  );
}
