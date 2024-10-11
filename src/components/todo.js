import { useState, useEffect } from "react";
import React from "react";

function Todo() {
  const [state, setState] = useState({});
  const [todoId, setTodo] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((response) => response.json())
      .then((json) => setState(json));
  }, [todoId]);
  return (
    <React.Fragment>
      <h1>Todo Item {todoId}</h1>
      {state && (
        <div>
          <h2>{state.title}</h2>
        </div>
      )}
      <br />
      <button onClick={() => setTodo(todoId + 1)}>Next List</button>
    </React.Fragment>
  );
}

export default Todo;
