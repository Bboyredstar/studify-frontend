import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

export function PrivateRoute({ children, ...rest }) {
  const { profile } = useSelector(state => state.auth)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !profile ? (
          <Redirect
            to={{
              pathname: '/api/login',
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
