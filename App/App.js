import React from 'react';
import { StatusBar, View,SafeAreaView } from 'react-native';
import AppNavigation from './Navigation/AppNavigation';
import { Provider } from 'react-redux'
import store from './Redux';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor='#202832' barStyle='dark-content' />
        <AppNavigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
