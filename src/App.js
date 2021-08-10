import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Accordion from './components/Accordion/Accordion';
import List from './components/List';
import DropDown from './components/DropDown';
import Translate from './components/Translate';
import Nav from './components/Nav/Nav';

const App = () => (
  <Router>
    <Nav />
    <Switch>
      <Route path="/" exact component={Accordion} />
      <Route path="/list" component={List} />
      <Route path="/drop-down" component={DropDown} />
      <Route path="/translate" component={Translate} />
    </Switch>
  </Router>
);

export default App;
