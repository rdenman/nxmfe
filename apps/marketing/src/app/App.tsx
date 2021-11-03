import { History } from 'history';
import { FC } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

interface AppProps {
  history: History;
}

const App: FC<AppProps> = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/pricing" component={Pricing} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
};

export default App;
