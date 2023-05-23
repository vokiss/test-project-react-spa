import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMddleware from 'redux-saga';
import mySaga from './store/sagas';
import { Provider } from 'react-redux';
import myReducer from './store/reducer';
import { getPostsFetch } from './store/actions';

const sagaMiddleware = createSagaMddleware();
const rootReducer = combineReducers({ myReducer });
const store = configureStore({reducer: rootReducer, middleware: [sagaMiddleware]});
sagaMiddleware.run(mySaga);

store.dispatch(getPostsFetch());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode >
);
