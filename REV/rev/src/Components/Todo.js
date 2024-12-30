import React from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
const Todo = (props) => {
    function deletTodoHandler(id){
        props.deleteTodo(id)
    }
  return (
    <div>
      <li>
        <p>Index: {props.index} --&gt; Id: {props.id} -- Task: {props.todo} <span onClick={()=>deletTodoHandler(props.id)}><FaDeleteLeft /></span></p>
      </li>
    </div>
  )
}

export default Todo
