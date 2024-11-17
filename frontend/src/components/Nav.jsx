import React from 'react'
import '../styles/nav.css'
const Nav = () => {
  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <h2>Note App</h2>
      </div>
      <ul>
        <li><button>Login</button></li>
      </ul>
    </div>
  )
}

export default Nav