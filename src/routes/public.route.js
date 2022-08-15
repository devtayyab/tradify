import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import NotFound from '../containers/NotFound';
import Welcome from '../containers/Welcome';
import { isLoggedIn } from '../helpers/auth';
import ComingSoon from '../containers/ComingSoon';
import ServerError from '../containers/ServerError';
import ResetPassword from '../containers/ResetPassword';
import Components from '../containers/Components';
import Charts from '../containers/Charts';
import Birthday from '../containers/SignUp/Birthday';
import EmailVerified from '../containers/EmailVerified';

const public_routes = [
  {
    name: '/welcome',
    exact: true,
    path: '/welcome',
    component: Welcome,
    key: '/welcome',
  },
  {
    name: '/login',
    exact: true,
    path: '/login',
    component: Login,
    key: '/login',
  },
  {
    name: '/sign-up',
    exact: true,
    path: '/sign-up',
    component: SignUp,
    key: '/sign-up',
  },
  {
    name: '/sign-up/birthday',
    exact: true,
    path: '/sign-up/birthday',
    component: Birthday,
    key: '/sign-up/birthday',
  },
  {
    name: '/reset-password',
    exact: true,
    path: ['/reset-password', '/reset-password/create-new'],
    component: ResetPassword,
    key: '/reset-password',
  },
  {
    name: '/coming-soon',
    exact: true,
    path: '/coming-soon',
    component: ComingSoon,
    key: '/coming-soon',
  },
  {
    name: '/email-verify',
    exact: true,
    path: '/email-verify',
    component: EmailVerified,
    key: '/email-verify',
  },
  {
    name: '/server-error',
    exact: true,
    path: '/server-error',
    component: ServerError,
    key: '/server-error',
  },
  {
    name: '/component-style-guidelines',
    exact: true,
    path: '/component-style-guidelines',
    component: Components,
    key: '/component-style-guidelines',
  },
  {
    name: '/component-charts',
    exact: true,
    path: '/component-charts',
    component: Charts,
    key: '/component-charts',
  },
];

const PublicRoutes = (props) => {
  if (props.location.pathname !== '/not-found' && isLoggedIn())
    return <Redirect to="/app" push from="/app/login" {...props} />;

  return (
    <Switch>
      {public_routes.map(({ key, name, path, exact, component, ...route }, i) => (
        <Route key={`${i}_${key}`} path={path} exact={exact} component={component} />
      ))}
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default PublicRoutes;
