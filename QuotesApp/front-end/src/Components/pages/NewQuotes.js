import React, { useRef } from 'react'
import styles from './NewQuotes.module.css'
import axios from 'axios';
const NewQuotes = () => {
  let usernameInputRef = useRef();
  let quoteInputRef = useRef();
  const addQuoteHandler = async (e) => {
    e.preventDefault();
    let author = usernameInputRef.current.value.trim();
    let text = quoteInputRef.current.value.trim();
  
    if (!author || !text) {
      alert("Both fields are required.");
      return;
    }
  
    try {
      let res = await axios.post('http://localhost:8000/addquotes', { author, quote: text });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <form onSubmit={addQuoteHandler} className={styles.form}>
      <div>
        <label htmlFor='author'>Author:</label>
        <input ref={usernameInputRef} type="text" id='author' placeholder='Enter author name'/>
      </div>
      <div>
        <label htmlFor='quote'>Quote:</label>
        <textarea ref={quoteInputRef} cols={10} rows={4} id='quote' placeholder='Enter ur quote'/>
      </div>
      <button>Add Quote</button>
    </form>
  )
}

export default NewQuotes
