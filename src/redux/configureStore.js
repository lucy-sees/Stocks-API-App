// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import stocksReducer from './stocks/stocksSlice';

const reducer = combineReducers({
  stocks: stocksReducer,
  // additional reducers could be added here
});

const store = configureStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
