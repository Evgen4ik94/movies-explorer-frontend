import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      { () => (props.authorize === true) ? <Component {...props} /> : <Redirect to='/' /> }
    </Route>
  )
}

export default ProtectedRoute;