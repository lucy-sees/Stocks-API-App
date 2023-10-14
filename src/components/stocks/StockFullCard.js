import PropTypes from 'prop-types';
import React from 'react';
import StockCardStyle from './StockCard.module.css';
import StocksListStyle from './StocksList.module.css';
import StockFullCardStyle from './StockFullCard.module.css';

const StockFullCard = ({ stock }) => (
  <div key={stock.stockId} className={StocksListStyle.fullDescriptionContent}>
    <div className={StockCardStyle.stockCard}>
      <h3 className={StockCardStyle.stockSymbol}>{stock.symbol}</h3>
      <h4 className={StockCardStyle.stockName}>{stock.name}</h4>
      <p className={StockCardStyle.stockPrice}>
        $
        {stock.price}
      </p>
    </div>
    <ul className={StockFullCardStyle.exchangeContent}>
      <li>
        <strong>Exchange:</strong>
      </li>
      <li>{stock.exchange}</li>
      <li>{stock.exchangeShortName}</li>
    </ul>
  </div>
);

StockFullCard.propTypes = {
  stock: PropTypes.shape({
    stockId: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    exchange: PropTypes.string.isRequired,
    exchangeShortName: PropTypes.string.isRequired,
  }).isRequired,
};

export default StockFullCard;
