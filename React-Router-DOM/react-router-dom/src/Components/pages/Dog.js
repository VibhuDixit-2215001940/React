import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dog = () => {
  let navigate = useNavigate()//It provides a method
  let redirectPageHandler = ()=>{
    navigate('/')
  }
  return (
    <div>
      <h1>Woof Woof !!</h1>
      <button onClick={redirectPageHandler}>Main Page</button>
    </div>
  )
}

export default Dog
