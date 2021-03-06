import React from 'react';
import { 
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import Navigation from './common/Navigation';
import SignUpPage from './user/SignUp';
import SignInPage from './user/SignIn';
import ForgotPasswordPage from './user/ForgotPassword';
import ChangePasswordPage from './user/ChangePassword';
import AccountPage from './user/Account';
import FeedPage from './feed/Feed';
import LandingPage from './feed/Landing';

import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation/>
        <Container>
          <Route
            exact path={routes.LANDING}
            component={() => <LandingPage />}
          />
          <Route
            exact path={routes.SIGN_UP}
            component={() => <SignUpPage />}
          />
          <Route
            exact path={routes.SIGN_IN}
            component={() => <SignInPage />}
          />
          <Route
            exact path={routes.FORGOT_PASSWORD}
            component={() => <ForgotPasswordPage />}
          />
          <Route
            exact path={routes.CHANGE_PASSWORD}
            component={() => <ChangePasswordPage />}
          />
          <Route
            exact path={routes.FEED}
            component={() => <FeedPage />}
          />
          <Route
            exact path={routes.ACCOUNT}
            component={() => <AccountPage />}
          />
        </Container>
      </div>
    </Router>
  )
}


export default withAuthentication(App);