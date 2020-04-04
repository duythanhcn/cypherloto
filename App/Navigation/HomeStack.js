import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../Containers/HomeContainer/HomeScreen';
import LogoTitle from '../Components/ItemComponent/LogoTitle';
import AccountButton from '../Components/ButtonComponent/AccountButton';
import InforButton from '../Components/ButtonComponent/InforButton';
import SearchButton from '../Components/ButtonComponent/SearchButton';

const Styles = {
  headerRight: {
    flexDirection: 'row'
  }
}

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
      headerRight: <View style={Styles.headerRight}>
        <SearchButton navigation={navigation} />
        <InforButton navigation={navigation} />
      </View>
    })
  })

export default HomeStack
