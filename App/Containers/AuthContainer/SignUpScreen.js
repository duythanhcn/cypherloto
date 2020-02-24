import React, { useEffect, useState } from 'react';
import Styles from './Styles/SignUpScreenStyles';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import logo from '../../Images/logo.png';
import InputComponent from '../../Components/ItemComponent/InputComponent';

const SignUpScreen = React.memo(props => {
  const { navigation } = props;
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {

  }, [])

  function signUp() {
    navigation.navigate('SignIn');
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.headerView}>
        <Image style={Styles.iconView} source={logo} />
        <Text style={Styles.headerText}>CYPHER LOTO</Text>
      </View>
      <View style={Styles.titleView}>
        <Text style={Styles.titleText}>Create An Account</Text>
      </View>
      <View style={Styles.contentView}>
        <InputComponent
          title='E-mail Address'
          placeHolder='E-mail'
          onChange={val => { }}
          icon='envelope'
          value=''
          type='emailAddress' />
        <View style={Styles.inputInnerView}>
          <View style={Styles.innerChild}>
            <InputComponent title='First Name'
              placeHolder='First Name'
              onChange={val => { }}
              icon='user'
              value=''
              type='name' />
          </View>
          <View style={Styles.innerChild}>
            <InputComponent title='Last Name'
              placeHolder='Last Name'
              onChange={val => { }}
              icon='user'
              value=''
              type='name' />
          </View>
        </View>
        <View style={Styles.inputInnerView}>
          <View style={Styles.innerChild}>
            <InputComponent title='Password'
              placeHolder='Password'
              onChange={val => { }}
              icon='lock'
              value=''
              type='password' />
          </View>
          <View style={Styles.innerChild}>
            <InputComponent title='Retype Password'
              placeHolder='Retype Password'
              onChange={val => { }}
              icon='lock'
              value=''
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