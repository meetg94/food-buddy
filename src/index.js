import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './slices';
const store = configureStore({ reducer: rootReducer })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
);
