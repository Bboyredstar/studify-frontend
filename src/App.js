import React from 'react';
import { NavBar } from './components'
import { SignIn } from './pages'

function App() {
  return (
    <>
      <NavBar />
      <div className={'min-vh-100'}>
        <SignIn />
      </div>
    </>
  )
}

export default App
