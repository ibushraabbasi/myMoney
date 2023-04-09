import React, { useState } from 'react'
import './Login.css'


export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <form className='login-form'>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input 
        type='email'
        onChange={(e) => setEmail(e)}
        value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input 
        type='password'
        onChange={(e) => setPassword(e)}
        value={password}
        />
      </label>
    </form>
  )
}
