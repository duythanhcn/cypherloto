import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthStack from './AuthStack';
import DrawMenuStack from './DrawMenuStack';
import HomeWithoutAccountScreen from '../Containers/HiddenContainer/HomeWithoutAccountScreen';
import AccountStack from './AccountStack';
import AuthScreen from '../Containers/AuthContainer/AuthScreen';

const PrimaryNavigation = createSwitchNavigator(
  {
    Init: {
      screen: HomeWithoutAccountScreen
    },
    Auth: {
      screen: AuthScreen
    },
    Authen: {
      screen: AuthStack
    },
    Account: {
      screen: AccountStack
    },
    App: {
      screen: DrawMenuStack
    }
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'screen',
    defaultNavigationOptions: {
      headerBackTitle: null,
      cardStyle: { backgroundColor: '#13161D' },
    }
  })

export default createAppContainer(PrimaryNavigation)
