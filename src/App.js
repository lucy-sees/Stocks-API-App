import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, Provider } from 'react-redux';
import Home from './pages/Home';
import StockDetails from './pages/StockDetails';
import NotMatch from './pages/NotMatch';
import { getStocks } from './redux/stocks/stocks';
import store from './redux/configureStore';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  dispatch(getStocks());

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/stock-details/:id" element={<StockDetails />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Provider>
  );
};

export default App;
