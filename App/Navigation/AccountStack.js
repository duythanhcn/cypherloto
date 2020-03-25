import React from 'react'
import { createStackNavigator, HeaderBackButton } from 'react-navigation';
import { Button } from 'native-base';
import ChangePasswordScreen from '../Containers/AccountContainer/ChangePasswordScreen';
import TwoFAScreen from '../Containers/AccountContainer/TwoFAScreen';
import DataStorage from '../Services/DataStorage';

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
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerBackTitle: null,
      gesturesEnabled: true,
      headerLeft: <HeaderBackButton onPress={() => {
        navigation.navigate(DataStorage.CURRENT_TAB)
      }} />,
      headerRight: (
        <Button transparent onPress={() => { }} />
      )
    })
  })

export default AccountStack
