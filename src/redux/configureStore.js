import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import stocksReducer from './stocks/stocks';

const store = configureStore({
  reducer: {
    stocks: stocksReducer,
    // additional reducers could be added here
  },
  middleware: [thunk, logger],
});

export default store;
