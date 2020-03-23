import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from '../Containers/AuthContainer/SignInScreen';
import SignUpScreen from '../Containers/AuthContainer/SignUpScreen';
import ForgotPasswordScreen from '../Containers/AuthContainer/ForgotPasswordScreen';

const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: SignInScreen
    },
    SignUp: {
      screen: SignUpScreen
    },
    Forgot: {
      screen: ForgotPasswordScreen
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
