import React, { useEffect, useState } from 'react';
import Styles from './Styles/ChangePasswordScreenStyles';
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import InputComponent from '../../Components/ItemComponent/InputComponent';
import { connect } from 'react-redux';
import validation from '../../Common/validation';

const ChangePasswordScreen = React.memo(props => {
  const { navigation, user, setUser } = props;
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function onChange() {
    console.log(user);
    setErrorMessage('');
    let oldPasswordError = validation('password', oldPassword);
    const newPasswordError = validation('password', newPassword);
    const confirmPasswordError = validation('confirmPassword', confirmPassword, newPassword);
    const confirmOldPasswordError = validation('confirmPassword', oldPassword, user.password);
    if (oldPasswordError || newPasswordError || confirmPasswordError || confirmOldPasswordError) {
      setErrorMessage(oldPasswordError || newPasswordError || confirmPasswordError || confirmOldPasswordError);
      return;
    }
  }

  return (
    <View style={Styles.container}>
      <KeyboardAvoidingView
        style={Styles.innerView}
        behavior={Platform.OS === 'ios' ? 'position' : null}
        contentContainerStyle={Styles.innerView}
        keyboardVerticalOffset={0}
        enabled>
        <View style={Styles.contentView}>
          <InputComponent title=''
            placeHolder='Old Password'
            onChange={val => setOldPassword(val !== '' ? val : null)}
            icon='lock'
            value={oldPassword}
            type='password' />
          <InputComponent title=''
            placeHolder='Password'
            onChange={val => setNewPassword(val !== '' ? val : null)}
            icon='lock'
            value={newPassword}
            type='password' />
          <InputComponent title=''
            placeHolder='Confirn New Password'
            onChange={val => setConfirmPassword(val !== '' ? val : null)}
            icon='lock'
            value={confirmPassword}
            type='confirmPassword' />
          <View style={Styles.actionView}>
            <TouchableOpacity
              onPress={() => onChange()}
              style={Styles.buttonView}>
              <Text style={Styles.btnText}>CHANGE PASSWORD</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.errorView}>
            <Text style={Styles.messageText}>{errorMessage}</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>)
});

const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return { setUser: (data) => dispatch({ data, type: 'SET_USER' }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordScreen);