import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { getStock } from '../../redux/stocks/stocks';
import store from '../../redux/configureStore';
import StockCardStyle from './StockCard.module.css';

const StockCard = (props) => {
  const {
    stockId,
    symbol,
    name,
    price,
    stockCard,
    title,
  } = props;

  const handleClick = () => {
    store.dispatch(getStock(stockId));
  };

  return (
    <div className={`${StockCardStyle.stockCard} ${stockCard}`}>
      <h3 className={StockCardStyle.stockSymbol}>{symbol}</h3>
      <h4 className={StockCardStyle.stockName}>{name}</h4>
      <p className={StockCardStyle.stockPrice}>
        $
        {price}
      </p>
      <NavLink to={`/stock-details/${stockId}`} exact className={StockCardStyle.stockLink}>
        <button type="button" onClick={handleClick}>
          <FaArrowAltCircleRight name="right-arrow-circle" color="#f8f8f8" />
        </button>
      </NavLink>
      {title !== '' ? <h6 className={StockCardStyle.sectionTitle}>{title}</h6> : ''}
    </div>
  );
};

StockCard.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stockId: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  stockCard: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default StockCard;
