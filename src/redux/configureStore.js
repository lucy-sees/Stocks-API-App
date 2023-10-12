import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import stocksReducer from './stocks/stocks';

const store = configureStore({
  reducer: {
    stocks: stocksReducer,
    // Add other reducers here if needed
  },
  middleware: [thunk, logger],
});

export default store;
