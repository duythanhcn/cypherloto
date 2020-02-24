import React, { useEffect } from 'react';
import Styles from './Styles/AuthScreenStyles';
import { View, Text, TouchableOpacity } from 'react-native';

const AuthScreen = React.memo(props => {
  const { navigation } = props;

  useEffect(() => {
    navigation.navigate('SignIn')
  }, [])

  return (<View style={Styles.container}></View>)
});

export default AuthScreen;