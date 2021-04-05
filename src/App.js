import React from 'react';
import { Route, } from 'react-router-dom'
import { NavBar, AuthRoute } from './components'
import { SignIn, SignUp } from './pages'

function App() {

  return (
    <>
      <NavBar />
      <div className={'min-vh-100'}>
        <Route exact path='/' component={() => <h1> Main </h1>} />
        <AuthRoute path='/api/login'>
          <SignIn />
        </AuthRoute>
        <AuthRoute path='/api/register'>
          <SignUp />
        </AuthRoute>
      </div>
    </>
  )
}

export default App
