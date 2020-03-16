import React from 'react'
import { createStackNavigator, HeaderBackButton } from 'react-navigation';
import { Button } from 'native-base';
import LogoTitle from '../Components/ItemComponent/LogoTitle';
import ChangePasswordScreen from '../Containers/AccountContainer/ChangePasswordScreen';
import TwoFAScreen from '../Containers/AccountContainer/TwoFAScreen';

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
      headerTitle: () => <LogoTitle />,
      headerBackTitle: null,
      gesturesEnabled: true,
      headerLeft: <HeaderBackButton onPress={ect => navigation.goBack()} />,
      headerRight: (
        <Button transparent onPress={() => { }} />
      )
    })
  })

export default AccountStack
