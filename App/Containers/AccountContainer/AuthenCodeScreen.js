import React, { useState } from 'react';
import Styles from './Styles/AuthenCodeScreenStyles';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';

const AuthenCodeScreen = React.memo(props => {
  const { navigation } = props;
  const qrCode = navigation.getParam('code', '');
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  function submit() {
    if (code !== qrCode) {
      setMessage('Invalid Code');
    } else {
      navigation.navigate('EnableAuthen');

    }
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.introView}>
        <Text style={Styles.firstTimeText}>
          Please enter the 16-digit key you just backed up.
          </Text>
        <View style={Styles.keyView}>
          <TextInput
            keyboardType='number-pad'
            value={code}
            onChangeText={val => setCode(val !== '' ? val.toUpperCase() : null)}
            style={Styles.input}
            textContentType='none' />
        </View>
        <Text style={Styles.errorText}>{message}</Text>
      </View>
      <View style={Styles.actionView}>
        <TouchableOpacity
          onPress={() => submit()}
          style={Styles.actionBtn}>
          <Text style={Styles.actionText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>)
});

const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return { setUser: (data) => dispatch({ data, type: 'SET_USER' }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenCodeScreen);