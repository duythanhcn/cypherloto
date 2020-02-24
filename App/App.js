import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import AppNavigation from './Navigation/AppNavigation';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
      <AppNavigation />
    </View>
  );
};

export default App;
