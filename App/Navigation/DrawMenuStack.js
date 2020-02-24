import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { HeaderBackButton, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import SideMenu from '../Containers/DrawMenuContainer/SlideMenu';
import { Button } from 'native-base';
import LogoTitle from '../Components/ItemComponent/LogoTitle';
import InformationScreen from '../Containers/HiddenContainer/InformationScreen';
import AccountScreen from '../Containers/HiddenContainer/AccountScreen';


const DrawMenu = createStackNavigator(
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
      headerLeft: HeaderBackButton,
      headerRight: (
        <Button transparent onPress={() => { }} />
      )
    })
  })

const DrawMenuStack = createDrawerNavigator(
  {
    Menu: SideMenu
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'red',
    drawerWidth: 250
  }
);


export default DrawMenuStack;