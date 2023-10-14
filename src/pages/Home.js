import React from 'react';
import StocksList from '../components/stocks/StocksList';

const Home = React.memo(() => (
  <section>
    <StocksList />
  </section>
));

Home.displayName = 'Home';

export default Home;
