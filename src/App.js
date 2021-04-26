import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { checkProfile } from './store/action/auth'
import { Route } from 'react-router-dom'
import { NavBar, AuthRoute, PrivateRoute, Preloader } from './components'
import { SignIn, SignUp, Main, ProfilePage, ProfileEditPage } from './pages'

function App() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    dispatch(checkProfile())
    setIsLoading(false)
  }, [dispatch])

  return (
    <div className={'min-vh-100'}>
      {isLoading && <Preloader />}
      {!isLoading && (
        <>
          <NavBar />
          <Route exact path='/'>
            <Main />
          </Route>
          <AuthRoute path='/api/login'>
            <SignIn />
          </AuthRoute>
          <AuthRoute path='/api/register'>
            <SignUp />
          </AuthRoute>
          <PrivateRoute path='/profile'>
            <ProfilePage />
          </PrivateRoute>
          <PrivateRoute path='/edit-profile'>
            <ProfileEditPage />
          </PrivateRoute>
        </>
      )}
    </div>
  )
}

export default App
