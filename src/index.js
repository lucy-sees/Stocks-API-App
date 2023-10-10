import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom.js';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/extensions
import store from './redux/configureStore.js';
import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.unstable_createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
