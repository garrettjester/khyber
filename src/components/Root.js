import React from "react";
import {Provider} from "react-redux";
import reducers from "../reducers"
import {createStore, applyMiddleware} from "redux";

const Root = ({children, initialState = {}}) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware()
  );
  return <Provider store={store}>{children} </Provider>
};

export default Root;
