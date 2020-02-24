import React from 'react';
import { createStackNavigator } from 'react-navigation';
import DrawingScreen from '../Containers/DrawingContainer/DrawingScreen';
import LogoTitle from '../Components/ItemComponent/LogoTitle';
import AccountButton from '../Components/ButtonComponent/AccountButton';
import InforButton from '../Components/ButtonComponent/InforButton';

const DrawingStack = createStackNavigator({
  Drawing: {
    screen: DrawingScreen
  }
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    headerTitle: () => <LogoTitle />,
    headerBackTitle: null,
    gesturesEnabled: false,
    headerLeft: <AccountButton navigation={navigation} />,
    headerRight: <InforButton navigation={navigation} />
  })
})

export default DrawingStack
