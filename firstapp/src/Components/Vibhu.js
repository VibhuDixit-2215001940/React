import React from 'react'
let arr2 = ["😂","🎊","🤕","🎉","😅","👎"]
let arr3 = ["day0","day1","day2","day3","day4","day5"]
let emoji = Math.floor(Math.random()*6)
const Vibhu = () => {
  return (
    <div>
      {/* <h1>Vibhu's age = {Math.floor(Math.random()*100)}</h1> */}
      <h1>Vibhu's emoji = {arr2[emoji]}</h1>
      {
        emoji === 3 ? <img src="https://images.unsplash.com/photo-1565325058867-e9a6c855ebb8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Salena" /> : "Tumse na ho payega"
      }
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
