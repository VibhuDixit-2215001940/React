import React from 'react'
let arr2 = ["😂","🎊","🤕","🎉","😅","👎"]
let arr3 = ["day0","day1","day2","day3","day4","day5"]
let emoji = Math.floor(Math.random()*6)
const Vibhu = () => {
  return (
    <div>
      {/* <h1>Vibhu's age = {Math.floor(Math.random()*100)}</h1> */}
      <h1>Vibhu's emoji = {arr2[emoji]}</h1>
      {/* <h1>Vibhu's favorite color = {['Red','Green','Blue'][Math.floor(Math.random()*3)]}</h1> */}
        {
            arr3.map((item, index)=>{
                return <p key={index}>{item} - {arr2[Math.floor(Math.random()*6)]}</p>
            })
        }
    </div>
  )
} 

export default Vibhu
