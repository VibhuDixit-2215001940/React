import React, { useState } from 'react'

const Person = (props) => {
  let [age, setAge] = useState(props.age);
  function handleClick(){
    setAge(age++);
    console.log("Age increased by 1")
  }
  return (
    <div>
      <div onClick={handleClick}>Hello</div>
      <h1>{props.name}</h1>
      <h3>{age}</h3>
      <h3>{props.favColor}</h3>
    </div>
  )
}

export default Person
 