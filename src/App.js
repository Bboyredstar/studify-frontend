import React, { useEffect } from 'react';
import { Route, } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { NavBar, AuthRoute } from './components'
import { setAuth } from './store/action/app'
import { SignIn, SignUp } from './pages'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setAuth())
  }, [dispatch]);
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
