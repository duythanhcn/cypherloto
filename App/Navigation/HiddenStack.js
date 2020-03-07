import React from 'react'
import { createStackNavigator, HeaderBackButton } from 'react-navigation';
import { Button } from 'native-base';
import LogoTitle from '../Components/ItemComponent/LogoTitle';
import InformationScreen from '../Containers/HiddenContainer/InformationScreen';

const HiddenStack = createStackNavigator(
  {
    Info: {
      screen: InformationScreen
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerTitle: () => <LogoTitle />,
      headerBackTitle: null,
      gesturesEnabled: false,
      headerLeft: <HeaderBackButton onPress={ect => navigation.goBack()} />,
      headerRight: (
        <Button transparent onPress={() => { }} />
      )
    })
  })

export default HiddenStack
