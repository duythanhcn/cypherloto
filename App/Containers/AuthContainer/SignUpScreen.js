import React, { useEffect, useState } from 'react';
import Styles from './Styles/SignUpScreenStyles';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import logo from '../../Images/logo.png';
import InputComponent from '../../Components/ItemComponent/InputComponent';
import apiService from '../../Services/API';
import validation from '../../Common/validation';

const SignUpScreen = React.memo(props => {
  const { navigation } = props;
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '', firstName: '', lastName: '' })

  useEffect(() => {

  }, [])

  async function signUp() {
    setErrorMessage('');
    // const emailError = validation('email', formData.email);
    // const passwordError = validation('password', formData.password);
    // const confirmPasswordError = validation('confirmPassword', formData.confirmPassword, formData.password);
    // if (emailError || passwordError || confirmPasswordError) {
    //   setErrorMessage(emailError || passwordError || confirmPasswordError);
    //   return;
    // }
    const response = await apiService.register(formData.email, formData.firstName, formData.lastName, formData.password);
    const { data, status, statusText } = response;
    if (status === 200) {
      navigation.navigate('SignIn');
    } else {
      setErrorMessage(statusText);
    }
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.headerView}>
        <Image style={Styles.iconView} source={logo} />
        <Text style={Styles.headerText}>CYPHER LOTTERY</Text>
      </View>
      <View style={Styles.titleView}>
        <Text style={Styles.titleText}>Create An Account</Text>
      </View>
      <View style={Styles.contentView}>
        <InputComponent
          title='E-mail Address'
          placeHolder='E-mail'
          onChange={val => setFormData({ ...formData, email: val })}
          icon='envelope'
          value={formData.email}
          type='emailAddress' />
        <View style={Styles.inputInnerView}>
          <View style={Styles.innerChild}>
            <InputComponent title='First Name'
              placeHolder='First Name'
              onChange={val => setFormData({ ...formData, firstName: val })}
              icon='user'
              value={formData.firstName}
              type='name' />
          </View>
          <View style={Styles.innerChild}>
            <InputComponent title='Last Name'
              placeHolder='Last Name'
              onChange={val => setFormData({ ...formData, lastName: val })}
              icon='user'
              value={formData.lastName}
              type='name' />
          </View>
        </View>
        <View style={Styles.inputInnerView}>
          <View style={Styles.innerChild}>
            <InputComponent title='Password'
              placeHolder='Password'
              onChange={val => setFormData({ ...formData, password: val })}
              icon='lock'
              value={formData.password}
              type='password' />
          </View>
          <View style={Styles.innerChild}>
            <InputComponent title='Comfirm Password'
              placeHolder='Comfirm Password'
              onChange={val => setFormData({ ...formData, confirmPassword: val })}
              icon='lock'
              value={formData.confirmPassword}
              type='password' />
          </View>
        </View>
        <View style={Styles.actionView}>
          <TouchableOpacity
            onPress={() => signUp()}
            style={Styles.buttonView}>
            <Text style={Styles.btnText}>SIGN UP</Text>
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
    </View>
  )
});

export default SignUpScreen;