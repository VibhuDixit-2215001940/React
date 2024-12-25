// import { useState } from 'react'

// function App() {
//   let counter = 10;
//   const addValue = ()=>{
//     counter += 10;
//     console.log(counter);
//   }
//   return (
//     <>
//       <p>Hello Raannnd!!! {counter}</p>
//       <button onClick={addValue}>Add</button>
//     </>
//   )
// }
// //On clicking button actual value is changing but the UI is not changing as it is handle by React.
// //Here comes HOOKS in react its main aim is to just change UI with respect to change in the existing code!!
// export default App

//---------------------------------------
import { useState } from 'react';
function App(){
    let [counter , setValue] = useState(10);
    // let counter = 10;
    const addValue = ()=>{
        counter += 10;
        setValue(counter)
        console.log(counter);
    }
    const subtractValue = ()=>{
        if(counter > 0){
            counter -= 10;
            setValue(counter);
        }
        else{
            counter = 0;
        }
        setValue(counter);
    }
    const deleteValue = ()=>{
        setValue(0);
    }
    
    return (
        <>
        <p>Hello Raannnd!!! {counter}</p>
        <button onClick={addValue}>Add</button>
        <button onClick={subtractValue}>Subtract</button>
        <button onClick={deleteValue}>Delete</button>
        </>
    )
}

export default App