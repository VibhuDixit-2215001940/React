import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cat = () => {
  let navigate = useNavigate()
  let redirectPageHandler = ()=>{
    navigate('/')
  }
  return (
    <div>
      <h1>Meowww Meooww</h1>
      <button onClick={redirectPageHandler}>Main Page</button>
    </div>
  )
}

export default Cat
