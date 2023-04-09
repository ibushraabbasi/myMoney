import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
      <nav className='navbar'>
        <ul>
            <li className='title'>myMoney</li>

            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/signup'>Signup</NavLink></li>

        </ul>
      </nav>
  )
}
