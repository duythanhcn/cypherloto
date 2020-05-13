import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import AppNavigation from './Navigation/AppNavigation';
import { Provider } from 'react-redux'
import store from './Redux';
import { connect } from 'react-redux';
import FireBase from './Services/Firebase';
import SplashScreen from 'react-native-splash-screen';

let App = (props) => {
  const { lot, setLot } = props;

  useEffect(() => {
    SplashScreen.hide();
    registerFirebase();
  }, [])

  async function registerFirebase() {
    FireBase.getInitialNotification().then(notification => {
      if (notification) {
        setLot(true)
      }
    })
    FireBase.registerFBNotification(notification => {
      setLot(true)
    });
    FireBase.registerFBNotificationOpen(notification => {
      setLot(true)
    })
  }

  return (
    <AppNavigation />
  );
};

const mapStateToProps = state => {
  return { lot: state.lot }
}

const mapDispatchToProps = dispatch => {
  return { setLot: (data) => dispatch({ data, type: 'SET_LOT' }) }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

const RootApp = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor='#202832' barStyle='dark-content' />
      <App />
    </Provider>)
}

export default RootApp;
