import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <h3 className='logo'>karloslazaroo</h3>
        <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar