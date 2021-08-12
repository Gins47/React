import React from "react";
import "./todo.css";

function model({ show }) {
  function submitHandler() {
    show();
  }

  function closeHandler() {
    show();
  }

  return (
    <div className="modal">
      <h2> Are you sure </h2>
      <div>
        <button className="button" onClick={submitHandler}>
          Submit
        </button>
        <button className="button btn--alt" onClick={closeHandler}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default model;
