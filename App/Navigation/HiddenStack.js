import React from 'react'
import { createStackNavigator, HeaderBackButton } from 'react-navigation';
import { Button } from 'native-base';
import LogoTitle from '../Components/ItemComponent/LogoTitle';
import InformationScreen from '../Containers/HiddenContainer/InformationScreen';
import DataStorage from '../Services/DataStorage';

const HiddenStack = createStackNavigator(
  {
    Info: {
      screen: InformationScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: '9 Ways To Win'
      })
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerTitle: () => <LogoTitle />,
      headerBackTitle: null,
      gesturesEnabled: false,
      headerLeft: <HeaderBackButton onPress={ect => navigation.navigate(DataStorage.CURRENT_TAB)} />,
      headerRight: (
        <Button transparent onPress={() => { }} />
      )
    })
  })

export default HiddenStack
