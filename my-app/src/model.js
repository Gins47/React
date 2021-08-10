import React from "react";
import "./todo.css";

function model() {
  return (
    <div className="modal">
      <h2> Are you sure </h2>
      <div>
        <button className="button">Submit</button>
        <button className="button btn--alt">Cancel</button>
      </div>
    </div>
  );
}

export default model;
