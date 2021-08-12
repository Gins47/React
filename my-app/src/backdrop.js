import React from "react";
import "./todo.css";
function backdrop({ show }) {
  return <div className="backdrop" onClick={show}></div>;
}

export default backdrop;
