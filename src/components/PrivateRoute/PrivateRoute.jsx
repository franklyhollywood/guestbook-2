import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';

export default function PrivateRoute({ children, ...routeProps }) {
  const { user } = useAuth();

  return (
    <>
      <p>On a private route!!!</p>
      <Route
        {...routeProps}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          )
        }
      />
    </>
  );
}
