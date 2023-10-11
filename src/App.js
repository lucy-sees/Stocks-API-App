import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useEffect } from 'react';
import NotMatch from './pages/NotMatch';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import StockDetails from './pages/StockDetails';
import { getStocks } from './redux/stocks/stocksSlice';
import store from './redux/configureStore';
import './App.css';

const App = () => {
  useEffect(() => {
    store.dispatch(getStocks());
  }, []);

  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route path="/stock-details" component={StockDetails} />
      <Route path="*" component={NotMatch} />
    </Router>
  );
};

export default App;
