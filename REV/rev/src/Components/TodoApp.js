import React, { useState } from 'react'
import TodoList from './TodoList'
import Form from './Form'
import {v4 as uuid} from 'uuid';
const TodoApp = () => {
    let arrayDummy = [
        {
            id:uuid(),
            todos: "Code karo",
            checked: false
        },
        {
            id:uuid(),
            todos: "Meet with boss",
            checked: false
        },
        {
            id:uuid(),
            todos: "Meeting with team",
            checked: false
        },
        {
            id:uuid(),
            todos: "Work on project",
            checked: false
        }
    ]
    let [todos, setTodods] = useState(arrayDummy)
    const addTodo = (todo)=>{
       setTodods([...todos,todo])
    }
    const deleteTodo = (id) => {
        setTodods(todos.filter(todo => todo.id!== id))
    }
    const checkTodo = (id)=>{
        // setTodods(todos.map(todo => todo.id === id? {...todo, checked:!todo.checked}: todo))
        setTodods((prevState)=>{
          return prevState.map(todo => todo.id === id? {...todo, checked:!todo.checked}: todo)
        })
    }
  return (
    <div>
      <Form addTodo={addTodo} todos={todos}/>
      {/* <TodoList todos={arrayDummy}/> */}
      <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
    </div>
  )
}

export default TodoApp
