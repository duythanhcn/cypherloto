import React from 'react'
import { createStackNavigator, HeaderBackButton, StackActions, NavigationActions } from 'react-navigation';
import { Button } from 'native-base';
import LogoTitle from '../Components/ItemComponent/LogoTitle';
import InformationScreen from '../Containers/HiddenContainer/InformationScreen';
import AccountScreen from '../Containers/HiddenContainer/AccountScreen';

const HiddenStack = createStackNavigator(
  {
    Account: {
      screen: AccountScreen
    },
    Info: {
      screen: InformationScreen
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerTitle: () => <LogoTitle />,
      headerBackTitle: null,
      gesturesEnabled: false,
      headerLeft: <HeaderBackButton onPress={ect => {
        const resetAction = StackActions.reset({
          index: 0,
          key: null,
          actions: [NavigationActions.navigate({ routeName: 'Account' })]
        });
        const goToCurrent = NavigationActions.navigate({
          routeName: 'Home'
        });
        navigation.dispatch(resetAction);
        navigation.dispatch(goToCurrent);
      }} />,
      headerRight: (
        <Button transparent onPress={() => { }} />
      )
    })
  })

export default HiddenStack
