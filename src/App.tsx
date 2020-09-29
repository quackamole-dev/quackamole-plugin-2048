import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubCorner from 'react-github-corner';
import './App.scss';

import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <GithubCorner href="https://github.com/mat-sz/2048" />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
