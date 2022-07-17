import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import thunk from "redux-thunk"
import App from './App';
import { createStore, applyMiddleware, Store } from "redux"
// import reportWebVitals from './reportWebVitals';

import reducer from "./store/reducer"

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
