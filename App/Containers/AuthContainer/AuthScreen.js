import React, { useEffect } from 'react';
import Styles from './Styles/AuthScreenStyles';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Storage from '../../Common/Storage';
import apiService from '../../Services/API';

const AuthScreen = React.memo(props => {
  const { navigation, setUser } = props;

  useEffect(() => {
    getLoginSession();
  }, []);

  async function getLoginSession() {
    const data = await Storage.getLoginSession();
    const userInfo = JSON.parse(data);
    if (!userInfo) {
      navigation.navigate('Init');
    } else {
      await autoSignIn(userInfo);
      navigation.navigate('App');
    }
  }

  async function autoSignIn(userInfo) {
    try {
      const response = await apiService.login(userInfo.email, userInfo.password);
      const { data, status } = response;
      if (status === 200 && !data.errors) {
        const { enable_2fa } = data.account_info;
        const _userInfo = { ...userInfo, enable_2fa };
        setUser(_userInfo);
        Storage.setLoginSession(_userInfo);
      }
    } catch (err) { }
  }

  return (<View style={Styles.container}></View>)
});

const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return { setUser: (data) => dispatch({ data, type: 'SET_USER' }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);