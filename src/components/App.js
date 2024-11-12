import React from 'react'
import { useState } from 'react'
import './../styles/App.css'
import LoginForm from './LoginForm'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      <h1>Parent component</h1>
      <LoginForm
        isLoggedIn={isLoggedIn}
        onLogin={() => setIsLoggedIn(true)}
      />
    </div>
  )
}

export default App
