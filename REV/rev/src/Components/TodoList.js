import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  const allTodos = props.todos.map((item, index) => {
    return (
      <Todo
        key={index}
        id={item.id}
        todo={item.todos}
        index={index}
        checked={item.checked} // Pass the checked property
        deleteTodo={props.deleteTodo}
        checkTodo={props.checkTodo}
      />
    );
  });

  return (
    <section>
      <ul>
        {allTodos}
      </ul>
    </section>
  );
};

export default TodoList;
