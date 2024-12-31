import {useState} from 'react'
import {v4 as uuid} from 'uuid';
const Form = (props) => {
    const [input, setInput] = useState('');
    function inputChangeHandler(e){
        // console.log(e.target.value)
        setInput(e.target.value)
    }
    function formSubmitHandler(e){
        e.preventDefault();
        const newTodo = {
            // id: props.todos.length,
            id: uuid(),
            todos:input,
            checked: false
        }
        props.addTodo(newTodo)
        console.log(input)
        setInput('')
    }
  return (
    <form onSubmit={formSubmitHandler}>
        <input onChange={inputChangeHandler} type="text" placeholder='Enter ur task' value={input} />
        <button>Submit</button>
    </form>
  )
}

export default Form
