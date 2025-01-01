import React from 'react'
import {Link} from 'react-router-dom'
const MainNavigation = () => {
  return (
    <nav className='nav'>
      <h2>Quotes App</h2>
      <ul>
        <li><Link to='/'>All Quotes</Link></li>
        <li><Link to='/new'>New Quotes</Link></li>
      </ul>
    </nav>
  )
}

export default MainNavigation