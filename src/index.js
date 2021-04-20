import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {Route, Router} from "react-router-dom";
import Root from "./components/Root";
import history from "./utils/history";


ReactDOM.render(
  <Root>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Root>
, document.querySelector('#root'))