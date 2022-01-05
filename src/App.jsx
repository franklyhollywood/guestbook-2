import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import Layout from './views/Layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
