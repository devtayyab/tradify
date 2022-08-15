import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import App from '../containers/App';
import Dashboard from '../containers/Dashboard';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Macroeconomics from '../containers/Macroeconomics';
import TechnicalAnalysis from '../containers/TechnicalAnalysis';
import PortfolioManagement from '../containers/PortfolioManagement';
import RiskToleranceQuiz from '../containers/RiskToleranceQuiz';
import RiskAwareProfile from '../containers/RiskAwarePortfolio';
import RiskProfile from '../containers/RiskProfile';
import Challenge from '../containers/Challenge';
import Course from '../containers/Course';
import Sentiment from '../containers/Sentiment';
import { isLoggedIn } from '../helpers/auth';

const private_routes = [
  {
    name: '/app',
    path: ['/app'],
    component: PortfolioManagement,
    key: '/app',
    exact: true,
  },
  {
    name: '/app/login',
    path: '/app/login',
    component: Login,
    key: '/app/login',
    exact: true,
  },
  {
    name: '/app/portfolio-management',
    path: '/app/portfolio-management',
    component: PortfolioManagement,
    key: '/app/portfolio-management',
    exact: true,
  },
  {
    name: '/app/risk-tolerance-quiz',
    path: '/app/risk-tolerance-quiz',
    key: '/app/risk-tolerance-quiz',
    component: RiskToleranceQuiz,
    exact: true,
  },
  {
    name: '/app/risk-aware-profile',
    path: '/app/risk-aware-profile',
    component: RiskAwareProfile,
    key: '/app/risk-aware-profile',
    exact: true,
  },
  {
    name: '/app/challenge',
    path: '/app/challenge',
    component: Challenge,
    key: '/app/challenge',
    exact: true,
  },
  {
    name: '/app/sentiment',
    path: '/app/sentiment',
    component: Sentiment,
    key: '/app/sentiment',
    exact: true,
  },
  {
    name: '/app/home',
    path: '/app/home',
    component: Home,
    key: '/app/home',
    exact: true,
  },
  {
    name: '/app/macroeconomics',
    path: '/app/macroeconomics',
    component: Macroeconomics,
    key: '/app/macroeconomics',
    exact: true,
  },
  {
    name: '/app/technical-analysis',
    path: '/app/technical-analysis',
    component: TechnicalAnalysis,
    key: '/app/technical-analysis',
    exact: true,
  },
  {
    name: '/app/challenge/course',
    path: '/app/challenge/:title',
    component: Course,
    key: '/app/challenge/course',
  },
];

const PrivateRoute = (props) => {
  if (!isLoggedIn()) return <Redirect to="/login" />;

  return (
    <App>
      <Switch>
        {private_routes.map(({ key, name, path, exact, component, ...route }, i) => (
          <Route {...route} key={`${i}_${key}`} path={path} exact={exact} component={component} />
        ))}
        <Route>
          <Redirect to="/not-found" />
        </Route>
      </Switch>
    </App>
  );
};

export default PrivateRoute;
