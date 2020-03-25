import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigation from './Navigation/AppNavigation';
import { Provider } from 'react-redux'
import store from './Redux';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor='#202832' barStyle='dark-content' />
      <AppNavigation />
    </Provider>
  );
};

export default App;
