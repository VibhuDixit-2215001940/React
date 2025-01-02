import React from 'react'
import styles from './NewQuotes.module.css'
const NewQuotes = () => {
  return (
    <form className={styles.form}>
      <div>
        <label htmlFor='author'>Author:</label>
        <input type="text" id='author' placeholder='Enter author name'/>
      </div>
      <div>
        <label htmlFor='quote'>Quote:</label>
        <textarea cols={10} rows={4} id='quote' placeholder='Enter ur quote'/>
      </div>
      <button>Add Quote</button>
    </form>
  )
}

export default NewQuotes
