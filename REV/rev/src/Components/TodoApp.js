import React, { useState } from 'react'
import TodoList from './TodoList'
import Form from './Form'
import {v4 as uuid} from 'uuid';
const TodoApp = () => {
    let arrayDummy = [
        {
            id:uuid(),
            todos: "Code karo"
        },
        {
            id:uuid(),
            todos: "Meet with boss"
        },
        {
            id:uuid(),
            todos: "Meeting with team"
        },
        {
            id:uuid(),
            todos: "Work on project"
        }
    ]
    let [todos, setTodods] = useState(arrayDummy)
    const addTodo = (todo)=>{
       setTodods([...todos,todo])
    }
    const deleteTodo = (id) => {
        setTodods(todos.filter(todo => todo.id!== id))
    }
  return (
    <div>
      <Form addTodo={addTodo} todos={todos}/>
      {/* <TodoList todos={arrayDummy}/> */}
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default TodoApp
