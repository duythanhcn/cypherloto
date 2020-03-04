import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthStack from './AuthStack';
import TabNavigation from './TabNavigation';
import DrawMenuStack from './DrawMenuStack';

const PrimaryNavigation = createSwitchNavigator(
  {
    Auth: {
      screen: AuthStack
    },
    App: {
      screen: TabNavigation
    },
    // DrawMenu: {
    //   screen: DrawMenuStack
    // }
  },
  {
    initialRouteName: 'Auth',
    defaultNavigationOptions: {
      headerBackTitle: null,
    }
  })

export default createAppContainer(PrimaryNavigation)
