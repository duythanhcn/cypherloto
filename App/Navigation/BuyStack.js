import React from 'react'
import { createStackNavigator, HeaderBackButton } from 'react-navigation'
import { Button } from 'native-base'
import BuyScreen from '../Containers/BuyContainer/BuyScreen'
import LogoTitle from '../Components/ItemComponent/LogoTitle';

const BuyStack = createStackNavigator({
  Buy: {
    screen: BuyScreen
  }
}, {
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

export default BuyStack
