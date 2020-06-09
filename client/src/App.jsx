import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Gallery from './components/pages/Gallery/Gallery';
import './App.scss';

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
      </Switch>
    </Router>
  );
};

export default App;
