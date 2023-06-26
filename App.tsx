import React from 'react';
import Main from './src/screens';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
        <Main />
    </Provider>
  );
}
