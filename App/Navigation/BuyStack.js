import React from 'react';
import { createStackNavigator } from 'react-navigation';
import BuyScreen from '../Containers/BuyContainer/BuyScreen';
import BalanceComponent from '../Components/ItemComponent/BalanceComponent';
import AccountButton from '../Components/ButtonComponent/AccountButton';
import InforButton from '../Components/ButtonComponent/InforButton';

const BuyStack = createStackNavigator({
  Buy: {
    screen: BuyScreen
  }
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    headerTitle: () => <BalanceComponent />,
    headerBackTitle: null,
    gesturesEnabled: false,
    headerLeft: <AccountButton navigation={navigation} />,
    headerRight: <InforButton navigation={navigation} />
  })
})

export default BuyStack
