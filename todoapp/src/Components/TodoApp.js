//YHAAN MILENGE
import React, { useState } from 'react'
import Todolist from './TodoList'
import Form from './Form'
import { v4 as uuid } from 'uuid';
const Todoapp = () => {
  let arrayDummy = [
    {
      id:uuid(),
      todo:"Code karo"
    },
    {
      id:uuid(),
      todo:"Code add"
    },
    {
      id:uuid(),
      todo:"Code commit"
    },
    {
      id:uuid(),
      todo:"Code add msg"
    },
    {
      id:uuid(),
      todo:"Code push"
    },
  ]
  let[todos, setTodos] = useState(arrayDummy)
  const addTodo = (todo)=>{
    setTodos([...todos, todo])
  }
  const deleteTodo = (id)=>{
    const newTodo = todos.filter(todo=>todo.id !== id)
    setTodos(newTodo)
  }
  return (
    <div>
      <h1>Todo List Of Vibhu</h1>
      <Form addTodo={addTodo} todos={todos}/>
      <Todolist todos={todos} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default Todoapp
