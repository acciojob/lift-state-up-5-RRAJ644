import React from 'react'

import { useState } from 'react'

const LoginForm = ({ isLoggedIn, onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin()
  }

  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type='text'
              name='username'
              value={formData?.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>Log In</button>
        </form>
      )}
    </div>
  )
}

export default LoginForm
