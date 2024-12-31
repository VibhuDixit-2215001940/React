import {useState} from 'react'
import {v4 as uuid} from 'uuid';
const Form = (props) => {
    const [input, setInput] = useState('');
    let [isValid, setIsValid] = useState(true);
    function inputChangeHandler(e){
        // console.log(e.target.value)
        setInput(e.target.value)
        if(input.trim().length > 0){//To handle empty todo submission
            setIsValid(true)
        }
    }
    function formSubmitHandler(e){
        e.preventDefault();
        if(input.trim().length === 0){
            setIsValid(false)
            return ;
        }
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
