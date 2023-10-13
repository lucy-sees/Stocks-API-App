import { Routes, Route } from 'react-router-dom';
import { useDispatch, Provider } from 'react-redux';
import NotMatch from './pages/NotMatch';
import Home from './pages/Home';
import { getStocks } from './redux/stocks/stocks';
import store from './redux/configureStore';
import './App.css';
import StockDetails from './pages/StockDetails';

const App = () => {
  const dispatch = useDispatch();
  dispatch(getStocks());

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/">
          <Route path="/" component={Home} />
          <Route path="/stock-details" component={StockDetails} />
        </Route>
        <Route path="*" component={NotMatch} />
      </Routes>
    </Provider>
  );
};

export default App;
