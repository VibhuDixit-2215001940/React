import React from 'react'
import styles from './Quote.module.css'
const Quote = (props) => {
  return (
    <div >
      <li className={styles.li}>
        <span>
          <p>{props.text}</p>
          <h3>{props.author}</h3>
        </span>
        <button>View Full Quote</button>
      </li>
    </div>
  )
}

export default Quote
 