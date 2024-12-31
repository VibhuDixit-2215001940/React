import React from 'react';
import { FaDeleteLeft } from "react-icons/fa6";

const Todo = (props) => {
  function deletTodoHandler(id) {
    props.deleteTodo(id);
  }

  function inputChangeHandler(id) {
    props.checkTodo(id);
  }

  return (
    <div>
      <li style={{ textDecoration: props.checked ? 'line-through' : 'none' }}>
        <p>
          Index: {props.index} --&gt; Id: {props.id} -- Task: {props.todo}{" "}
          <span onClick={() => deletTodoHandler(props.id)}>
            <FaDeleteLeft />
          </span>
          <input
            type="checkbox"
            onChange={() => inputChangeHandler(props.id)}
            defaultChecked={props.checked}
          />
        </p>
      </li>
    </div>
  );
};

export default Todo;
