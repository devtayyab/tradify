import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { isLoggedIn } from '../helpers/auth';
import PublicRoutes from './public.route';
import PrivateRoute from './private.route';
import NotFound from '../containers/NotFound';

const MainRouter = (props) => (
  <Router {...props}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (!isLoggedIn() ? <Redirect to="/login" push /> : <Redirect to="/app" />)}
      />
      <Route path="/app" component={PrivateRoute} />
      <PublicRoutes />
      <Route path={['*', '/not-found']} component={NotFound} />
    </Switch>
  </Router>
);

export default MainRouter;
