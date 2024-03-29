import React, { useEffect, useState } from 'react';
import Styles from './Styles/SignInScreenStyles';
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import logo from '../../Images/logo.png';
import { connect } from 'react-redux';
import InputComponent from '../../Components/ItemComponent/InputComponent';
import TwoFAModel from '../../Components/ModelComponent/TwoFAModel';
import apiService from '../../Services/API';
import validation from '../../Common/validation';
import Utils from '../../Common/Utils';
import Storage from '../../Common/Storage';
import Message from '../../Common/Message';

const SignInScreen = React.memo(props => {
  const { navigation, setUser } = props;
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isShow2FA, setShow2FA] = useState(false);
  const [isBtnDisable, setBtnDisable] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const func = () => {
      if (isBtnDisable) {
        setShow2FA(true);
      }
    }
    func();
  }, [isBtnDisable])

  async function signIn() {
    setErrorMessage('');
    const emailError = validation('email', email);
    const passwordError = validation('password', password);
    if (emailError || passwordError) {
      setErrorMessage(emailError || passwordError);
      return;
    }
    const _password = Utils.hashString({ email, password }, 'password_token');
    try {
      const response = await apiService.login(email, _password);
      const { data, status } = response;
      if (status === 200 && !data.errors) {
        const { enable_2fa } = data.account_info;
        const userInfo = { ...data.account_info, email, password: _password };
        setUser(userInfo);
        Storage.setLoginSession(userInfo);
        if (enable_2fa) {
          setBtnDisable(true);
        } else {
          navigation.navigate('App');
        }
      } else {
        setErrorMessage(data.errors.message);
      }
    } catch (err) {
      setErrorMessage(Message.ServiceError);
    }
  }

  function onSignInSuccess(status) {
    setShow2FA(false);
    if (status) {
      setErrorMessage('');
      setTimeout(() => {
        navigation.navigate('App');
      }, 200)
    }
    setBtnDisable(false);
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
          <Text style={Styles.titleText}>Sign In</Text>
        </View>
        <View style={Styles.contentView}>
          <InputComponent title='E-mail Address'
            placeHolder='E-mail'
            onChange={val => setEmail(val !== '' ? val : null)}
            icon='envelope'
            value={email}
            type='emailAddress' />
          <InputComponent title='Password'
            placeHolder='Password'
            onChange={val => setPassword(val !== '' ? val : null)}
            icon='lock'
            value={password}
            type='password' />
          <View style={Styles.actionView}>
            <TouchableOpacity
              onPress={() => !isBtnDisable ? signIn() : null}
              style={[Styles.buttonView, isBtnDisable ? Styles.btnDisable : null]}>
              <Text style={Styles.btnText}>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { navigation.navigate('Init') }}
              style={Styles.backView}>
              <Text style={Styles.backText}>Go Back</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.errorView}>
            <Text style={Styles.messageText}>{errorMessage}</Text>
          </View>
        </View>
        <View style={Styles.fogotView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Forgot')}
            style={Styles.forgotBtn}>
            <Text style={Styles.forgotText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.footerView}>
          <Text style={Styles.footerText}>Sign up for an account</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={Styles.redirectBtn}>
            <Text style={Styles.redirectBtnText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <TwoFAModel
          isVisible={isShow2FA}
          onChange={(status) => onSignInSuccess(status)} />
      </KeyboardAvoidingView>
    </View>
  )
});

const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return { setUser: (data) => dispatch({ data, type: 'SET_USER' }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);