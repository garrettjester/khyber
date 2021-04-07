import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {Route, BrowserRouter} from "react-router-dom"
import Root from "./components/Root"

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>
, document.querySelector('#root'))