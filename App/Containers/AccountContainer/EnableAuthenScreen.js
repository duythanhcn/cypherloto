import React, { useState } from 'react';
import Styles from './Styles/EnableAuthenScreenStyles';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import apiService from '../../Services/API';
import InputComponent from '../../Components/ItemComponent/InputComponent';
import DataStorage from '../../Services/DataStorage';
import Message from '../../Common/Message';

const EnableAuthenScreen = React.memo(props => {
  const { navigation, user, setUser } = props;
  const [password, setPassword] = useState('');
  const [authenCode, setAuthenCode] = useState('');
  const [message, setMessage] = useState('');

  async function enable2FA() {
    try {
      const response = await apiService.enable2FA(user.email, password, authenCode);
      const { data, status } = response;
      if (status === 200 && !data.errors) {
        setUser({ enable_2fa: true });
        navigation.navigate(DataStorage.CURRENT_TAB)
      } else {
        setMessage(data.errors.message);
      }
    } catch (err) {
      setMessage(Message.ServiceError);
    }
  }

  async function disable2FA() {
    try {
      const response = await apiService.disable2FA(user.email, password, authenCode);
      const { data, status } = response;
      if (status === 200 && !data.errors) {
        setUser({ enable_2fa: false });
        navigation.navigate(DataStorage.CURRENT_TAB)
      } else {
        setMessage(data.errors.message);
      }
    } catch (err) {
      setMessage(Message.ServiceError);
    }
  }

  async function submit() {
    if (user.enable_2fa) {
      await disable2FA();
    } else {
      await enable2FA();
    }
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.inputView}>
        <InputComponent title='Login Password'
          placeHolder='Login Password'
          onChange={val => setPassword(val !== '' ? val : null)}
          icon='lock'
          value={password}
          type='password' />
        <InputComponent title='Google Authenticator Code'
          placeHolder='Google Authenticator Code'
          onChange={val => setAuthenCode(val !== '' ? val : null)}
          icon='qrcode'
          value={authenCode}
          type='telephoneNumber'
          keyboard='number-pad' />

        <Text style={Styles.errorText}>{message}</Text>
      </View>
      <View style={Styles.actionView}>
        <TouchableOpacity
          onPress={() => submit()}
          style={Styles.actionBtn}>
          <Text style={Styles.actionText}>Submit</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(EnableAuthenScreen);