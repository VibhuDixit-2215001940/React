import React from 'react'

const Person = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.age}</h3>
      <h3>{props.favColor}</h3>
    </div>
  )
}

export default Person
 