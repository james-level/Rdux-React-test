import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/common/HomePage.js';
import About from './components/common/AboutPage.js';
import Instrument from './components/instrument/Instrument.js';
import App from './components/App.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/about" component={About}</Route>
    <Route path="/instruments" component={Instrument}</Route>
  </Route>
);
