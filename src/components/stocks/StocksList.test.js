import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import store from '../../redux/configureStore';
import StocksList from './StocksList';

const renderComponent = () => {
  const stock = {
    stockId: 1,
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 148.48,
    exchange: 'NASDAQ',
    exchangeShortName: 'NASDAQ',
  };

  render(
    <Provider store={store}>
      <BrowserRouter>
        <StocksList stock={stock} />
      </BrowserRouter>
    </Provider>,
  );
};

describe('Testing StocksList component', () => {
  test('render the StockList successfully', () => {
    renderComponent();
    expect(screen.queryAllByText('*')).toStrictEqual([]);
  });

  test('StocksList has 2 buttons', () => {
    renderComponent();
    expect(screen.getAllByRole('button').length).toBe(2);
  });

  test('StocksList has 4 options to select', () => {
    renderComponent();
    expect(screen.getAllByRole('option').length).toBe(4);
  });

  test('StocksList has a button with CHECK ALL text', () => {
    renderComponent();
    expect(screen.getAllByRole('button')[0]).toHaveTextContent('CHECK ALL');
  });

  test('StocksList has an option with ----- text', () => {
    renderComponent();
    expect(screen.getAllByRole('option')[0]).toHaveTextContent('-----');
  });

  test('StocksList has an option with NASDAQ text', () => {
    renderComponent();
    expect(screen.getAllByRole('option')[1]).toHaveTextContent('NASDAQ');
  });

  test('StocksList has an option with NYSE text', () => {
    renderComponent();
    expect(screen.getAllByRole('option')[2]).toHaveTextContent('NYSE');
  });

  test('StocksList has an option with AMEX text', () => {
    renderComponent();
    expect(screen.getAllByRole('option')[3]).toHaveTextContent('AMEX');
  });
});
