import React from 'react';
import { createStackNavigator, HeaderBackButton, } from 'react-navigation-stack';
import SignInScreen from '../Containers/AuthContainer/SignInScreen';
import SignUpScreen from '../Containers/AuthContainer/SignUpScreen';

const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: SignInScreen
    },
    SignUp: {
      screen: SignUpScreen
    }
  },
  {
    initialRouteName: 'SignIn',
    headerMode: 'none',
    defaultNavigationOptions: () => ({
      gesturesEnabled: true
    })
  })

export default AuthStack
