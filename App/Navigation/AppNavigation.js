import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthStack from './AuthStack';
import DrawMenuStack from './DrawMenuStack';

const PrimaryNavigation = createSwitchNavigator(
  {
    Auth: {
      screen: AuthStack
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
      cardStyle: { backgroundColor: '#202832' },
    }
  })

export default createAppContainer(PrimaryNavigation)
