import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  // <Provider store={store}>
    // <HashRouter>
      <App />,
    // </HashRouter>,
  // </Provider>,
  document.getElementById("root")
);
