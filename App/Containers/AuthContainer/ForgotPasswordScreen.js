import React, { useEffect, useState } from 'react';
import Styles from './Styles/ForgotPasswordScreenStyles';
import { View, TouchableOpacity, Text, Image, KeyboardAvoidingView, Platform } from 'react-native';
import InputComponent from '../../Components/ItemComponent/InputComponent';
import apiService from '../../Services/API';
import logo from '../../Images/logo.png';
import validation from '../../Common/validation';
import AlertModal from '../../Components/ModelComponent/AlertModal';

const ForgotPasswordScreen = React.memo(props => {
  const { navigation } = props;
  const [email, setEmail] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isShowAlert, setShowAlert] = useState(false);
  const actions = [
    { btnText: 'OK', btnAction: () => { setShowAlert(false) } }
  ]

  async function resetPassword() {
    setErrorMessage('');
    const emailError = validation('email', email);
    if (emailError) {
      setErrorMessage(emailError);
      return;
    }
    const response = await apiService.forgotPassword(email);
    const { data, status } = response;
    if (status === 200 && !data.errors) {
      setShowAlert(true);
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
        <View style={Styles.headerView}>
          <Image style={Styles.iconView} source={logo} />
          <Text style={Styles.headerText}>CYPHER LOTTERY</Text>
        </View>
        <View style={Styles.titleView}>
          <Text style={Styles.titleText}>Request New Password</Text>
        </View>
        <View style={Styles.contentView}>
          <InputComponent title='E-mail Address'
            placeHolder='E-mail'
            onChange={val => setEmail(val !== '' ? val : null)}
            icon='envelope'
            value={email}
            type='emailAddress' />
          <View style={Styles.actionView}>
            <TouchableOpacity
              onPress={() => resetPassword()}
              style={Styles.buttonView}>
              <Text style={Styles.btnText}>RESET PASSWORD</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.errorView}>
            <Text style={Styles.messageText}>{errorMessage}</Text>
          </View>
        </View>
        <View style={Styles.footerView}>
          <Text style={Styles.footerText}>Already registered member</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}
            style={Styles.redirectBtn}>
            <Text style={Styles.redirectBtnText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <AlertModal
        isVisible={isShowAlert}
        message='Please check your email for new password'
        title='Inform'
        actions={actions} />
    </View>
  )
});

export default ForgotPasswordScreen;