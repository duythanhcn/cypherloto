import { createStackNavigator } from 'react-navigation-stack';
import AuthScreen from '../Containers/AuthContainer/AuthScreen'
import SignInScreen from '../Containers/AuthContainer/SignInScreen';
import SignUpScreen from '../Containers/AuthContainer/SignUpScreen';

const AuthStack = createStackNavigator(
  {
    Auth: {
      screen: AuthScreen
    },
    SignIn: {
      screen: SignInScreen
    },
    SignUp: {
      screen: SignUpScreen
    }
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none',
    defaultNavigationOptions: () => ({
      gesturesEnabled: false
    })
  })

export default AuthStack
