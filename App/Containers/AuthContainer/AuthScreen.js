import React, { useEffect } from 'react';
import Styles from './Styles/AuthScreenStyles';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Storage from '../../Common/Storage';

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
      setUser(userInfo);
      navigation.navigate('App');
    }
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