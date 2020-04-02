import React from 'react'
import { createStackNavigator, HeaderBackButton } from 'react-navigation';
import { Button } from 'native-base';
import ChangePasswordScreen from '../Containers/AccountContainer/ChangePasswordScreen';
import TwoFAScreen from '../Containers/AccountContainer/TwoFAScreen';
import DataStorage from '../Services/DataStorage';
import ShowKeyScreen from '../Containers/AccountContainer/ShowKeyScreen';
import AuthenCodeScreen from '../Containers/AccountContainer/AuthenCodeScreen';
import EnableAuthenScreen from '../Containers/AccountContainer/EnableAuthenScreen';

const AccountStack = createStackNavigator(
  {
    ChangePassword: {
      screen: ChangePasswordScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Change Password'
      })
    },
    TwoFA: {
      screen: TwoFAScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: '2FA Setting'
      })
    },
    ShowKey: {
      screen: ShowKeyScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Backup Key'
      })
    },
    AuthenCode: {
      screen: AuthenCodeScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Enter the 16-Digit key'
      })
    },
    EnableAuthen: {
      screen: EnableAuthenScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Enable 2FA Authen'
      })
    },
    DisableAuthen: {
      screen: EnableAuthenScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Disable 2FA Authen'
      })
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerBackTitle: null,
      gesturesEnabled: true,
      headerLeft: <HeaderBackButton onPress={() => {
        const { routeName } = navigation.state;
        if (['TwoFA', 'DisableAuthen', 'ChangePassword'].includes(routeName)) {
          navigation.navigate(DataStorage.CURRENT_TAB)
        } else {
          navigation.goBack();
        }

      }} />,
      headerRight: (
        <Button transparent onPress={() => { }} />
      )
    })
  })

export default AccountStack
