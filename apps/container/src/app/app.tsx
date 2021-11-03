import { CssBaseline } from '@mui/material';
import { createBrowserHistory } from 'history';
import { FC, Suspense, useEffect, useState } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/Progress';

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
          <Route path="/auth">Auth</Route>
          <Route path="/dashboard">
            {!isSignedIn && <Redirect to="/" />}
            Dashboard
          </Route>
          <Route path="/">Home</Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
