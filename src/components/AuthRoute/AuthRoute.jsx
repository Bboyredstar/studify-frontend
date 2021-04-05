import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

export function AuthRoute({ children, ...rest }) {
  const { profile } = useSelector(state => state.auth)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        profile ? (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  )
}
