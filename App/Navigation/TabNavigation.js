import React from 'react';
import { createBottomTabNavigator } from 'react-navigation'
import { BottomTabBar } from 'react-navigation-tabs'
import { View } from 'react-native';
import HomeStack from './HomeStack';
import BuyStack from './BuyStack';
import TicketStack from './TicketStack';
import DrawingStack from './DrawingStack';
import WalletStack from './WalletStack';
import HiddenStack from './HiddenStack';
import TabBarBottomIcon from '../Components/ItemComponent/TabBarBottomIcon';

const TabNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack
    },
    Buy: {
      screen: BuyStack
    },
    Ticket: {
      screen: TicketStack
    },
    Drawing: {
      screen: DrawingStack
    },
    Wallet: {
      screen: WalletStack
    },
    HiddenTab: {
      screen: HiddenStack
    }
  },
  {
    backBehavior: 'history',
    tabBarOptions: {
      showLabel: false
    },
    defaultNavigationOptions: ({ navigation }) => ({
      headerBackTitle: null,
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        return <TabBarBottomIcon focused={focused} routeName={routeName} />;
      },
    }),
    tabBarOptions: {
      tabStyle: { backgroundColor: '#202832' },
      activeTintColor: '#6AC80E',
      inactiveTintColor: '#999CA1'
    },
    tabBarComponent: props =>
      <BottomTabBar
        {...props}
        getButtonComponent={({ route }) => {
          // Custom TabBar to hide TabItem
          if (route.key === 'HiddenTab') {
            return () => <View />
          } else {
            return null
          }
        }}
      />
  })

const defaultGetStateForAction = TabNavigation.router.getStateForAction
TabNavigation.router.getStateForAction = (action, state) => {
  // Fix issue when go back on Android and iOS
  if (action.type === 'Navigation/BACK') {
    let { index, routes } = state
    let currentRoute = routes[index].routes
    let currentRouteName = routes[index].routeName
    let currentParams = currentRoute[currentRoute.length - 1].params
    let isFromOtherTab = false
    let customAction
    if (currentParams !== undefined && currentParams.hasOwnProperty('fromOtherTab')) {
      isFromOtherTab = currentParams.fromOtherTab
    }
    if (isFromOtherTab || currentRoute.length === 1) {
      customAction = { type: 'Navigation/BACK', key: currentRouteName }
    } else {
      customAction = { type: 'Navigation/POP' }
    }
    return defaultGetStateForAction(customAction, state)
  }
  return defaultGetStateForAction(action, state)
}

export default TabNavigation;
