import { useState } from "react";
import "./todo.css";
import Backdrop from "./backdrop";
import Model from "./model";
function Todo(props) {
  const [isModel, setModelOpen] = useState(false);

  function deletehandler() {
    console.log("DELETE");
    setModelOpen(true);
  }

  return (
    <div className="todo_card">
      <h2>{props.text}</h2>
      <div className="action">
        <button className="button" onClick={deletehandler}>
          DELETE
        </button>
      </div>
      {isModel && <Backdrop />}
      {isModel && <Model />}
    </div>
  );
}

export default Todo;
