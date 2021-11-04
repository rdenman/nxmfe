import { CssBaseline } from '@mui/material';
import { createBrowserHistory } from 'history';
import { FC, lazy, Suspense, useEffect, useState } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/Progress';

const AuthAppLazy = lazy(() => import('./components/AuthApp'));
const MarketingAppLazy = lazy(() => import('./components/MarketingApp'));
const DashboardAppLazy = lazy(() => import('./components/DashboardApp'));

const history = createBrowserHistory();

const App: FC = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <CssBaseline />
      <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
      <Suspense fallback={<Progress />}>
        <Switch>
          <Route path="/auth" component={AuthAppLazy} />
          <Route path="/dashboard">
            {/* {!isSignedIn && <Redirect to="/" />} */}
            <DashboardAppLazy />
          </Route>
          <Route path="/" component={MarketingAppLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
