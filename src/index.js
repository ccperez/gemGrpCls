import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import    App from './App';
import Create from './components/Create';
import   Show from './components/Show';
import   Edit from './components/Edit';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path = '/'   component = {App} />
      <Route path = '/create'   component = {Create} />
      <Route path = '/show/:id' component = {Show} />
      <Route path = '/edit/:id' component = {Edit} />
    </div>
  </Router>,
  document.getElementById('app')
);