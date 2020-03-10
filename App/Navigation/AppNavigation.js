import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthStack from './AuthStack';
import DrawMenuStack from './DrawMenuStack';
import HomeWithoutAccountScreen from '../Containers/HiddenContainer/HomeWithoutAccountScreen';

const PrimaryNavigation = createSwitchNavigator(
  {
    Init: {
      screen: HomeWithoutAccountScreen
    },
    Auth: {
      screen: AuthStack
    },
    App: {
      screen: DrawMenuStack
    }
  },
  {
    initialRouteName: 'Init',
    headerMode: 'screen',
    defaultNavigationOptions: {
      headerBackTitle: null,
      cardStyle: { backgroundColor: '#13161D' },
    }
  })

export default createAppContainer(PrimaryNavigation)
