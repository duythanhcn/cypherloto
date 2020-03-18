import React, { useEffect, useState } from 'react';
import Styles from './Styles/ChangePasswordScreenStyles';
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import InputComponent from '../../Components/ItemComponent/InputComponent';
import { connect } from 'react-redux';
import validation from '../../Common/validation';
import apiService from '../../Services/API';
import AlertModal from '../../Components/ModelComponent/AlertModal';
import { withNavigationFocus } from 'react-navigation';

const ChangePasswordScreen = React.memo(props => {
  const { navigation, user, setUser, isFocused } = props;
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isShowAlert, setShowAlert] = useState(false)
  const [message, setMessage] = useState('');
  const actions = [
    {
      btnText: 'OK', btnAction: () => {
        setShowAlert(false);
        setMessage('');
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
      }
    }
  ]

  useEffect(() => {
    if (!isFocused) {
      setMessage('');
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
  }, [isFocused])

  async function onChange() {
    setErrorMessage('');
    let oldPasswordError = validation('password', oldPassword);
    const newPasswordError = validation('password', newPassword);
    const confirmPasswordError = validation('confirmPassword', confirmPassword, newPassword);
    const confirmOldPasswordError = validation('confirmPassword', oldPassword, user.password);
    if (oldPasswordError || newPasswordError || confirmPasswordError || confirmOldPasswordError) {
      setErrorMessage(oldPasswordError || newPasswordError || confirmPasswordError || confirmOldPasswordError);
      return;
    }
    const response = await apiService.changePassword(user.email, oldPassword, newPassword);
    const { data, status } = response;
    if (status === 200 && !data.errors) {
      setMessage('Change password success');
      setShowAlert(true);
      setUser({ password: newPassword });
    } else {
      setErrorMessage(data.errors.message);
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
            type='password' />
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
      <AlertModal
        isVisible={isShowAlert}
        message={message}
        title='Inform'
        actions={actions} />
    </View>)
});

const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return { setUser: (data) => dispatch({ data, type: 'SET_USER' }) }
}

export default withNavigationFocus(connect(mapStateToProps, mapDispatchToProps)(ChangePasswordScreen));