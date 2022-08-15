import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';

import App from './App';

import reportWebVitals from './reportWebVitals';
import configureStore from './redux/store';
import registerServiceWorker from './registerServiceWorker';

import 'typeface-roboto';

const { store, persistor } = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
registerServiceWorker();
