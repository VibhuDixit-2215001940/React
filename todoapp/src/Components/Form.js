import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
const Form = (props) => {
    let[input, setInput] = useState('');
    function inputChangeHandler(event){
        setInput(event.target.value)
    }
    function formSubmitHandler(event){
        event.preventDefault();// prevent default submitting
        const newTodo = {
            id: uuid(),
            todo: input
        }
        props.addTodo(newTodo)
        console.log(input)
        setInput('');
        
    }
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <input onChange={inputChangeHandler} type="text" placeholder="Enter your task: "/>
        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}

export default Form
