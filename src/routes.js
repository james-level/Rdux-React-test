import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/common/HomePage.js';
import About from './components/common/AboutPage'
import InstrumentPage from './components/instrument/InstrumentPage'
// import CartPage from './components/cart/CartPage';
import InstrumentDetailsPage from './components/instrument/InstrumentDetailsPage'
import App from './components/App.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/about" component={About}></Route>
    <Route path="/instruments" component={InstrumentPage}></Route>
    <Route path="/instruments/:id" component={InstrumentDetailsPage}></Route>
  </Route>
);
