import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css'
import App from './App';

// redux
import { store, persistor } from './store/store';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// apollo
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ApolloProvider >
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals