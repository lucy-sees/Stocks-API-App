import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import NotMatch from './pages/NotMatch';
import Home from './pages/Home';
import StockDetails from './pages/stockDetails';
import { getStocks } from './redux/stocks/stocks';
import store from './redux/configureStore';
import './App.css';

const App = () => {
  useEffect(() => {
    store.dispatch(getStocks());
  }, []);

  return (
    <div>
      <>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/stock-details" element={<StockDetails />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </>
    </div>
  );
};

export default App;
