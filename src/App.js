import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { checkProfile } from './store/action/auth'
import { Route } from 'react-router-dom'
import { NavBar, AuthRoute } from './components'
import { SignIn, SignUp, Main } from './pages'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkProfile())
  }, [])

  return (
    <>
      <NavBar />
      <div className={'min-vh-100'}>
        <Route exact path='/'>
          <Main />
        </Route>
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
