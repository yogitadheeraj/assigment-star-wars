import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import "semantic-ui-css/semantic.min.css";
import configureStore from "../src/shared/store";
const rootEl = document.getElementById("root");
const store= configureStore();
ReactDOM.render(
  <Provider store={store}>
   <App />,
  </Provider>,
  rootEl
);
