import React from 'react';
import { StatusBar, View } from 'react-native';
import AppNavigation from './Navigation/AppNavigation';
import { Provider } from 'react-redux'
import store from './Redux';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor='white' barStyle='dark-content' />
        <AppNavigation />
      </View>
    </Provider>
  );
};

export default App;
