import React from 'react';
import StockFullCard from '../components/stocks/StockFullCard';

const StockDetails = () => (
  <section>
    <h1>Full Description</h1>
    <StockFullCard />
  </section>
);

export default React.memo(StockDetails);
