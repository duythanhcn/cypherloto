import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../Containers/HomeContainer/HomeScreen';
import LogoTitle from '../Components/ItemComponent/LogoTitle';
import AccountButton from '../Components/ButtonComponent/AccountButton';
import InforButton from '../Components/ButtonComponent/InforButton';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerTitle: () => <LogoTitle />,
      headerBackTitle: null,
      gesturesEnabled: false,
      headerLeft: <AccountButton navigation={navigation} />,
      headerRight: <InforButton navigation={navigation} />
    })
  })

export default HomeStack
