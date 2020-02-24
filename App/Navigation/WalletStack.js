import React from 'react';
import { createStackNavigator, HeaderBackButton } from 'react-navigation';
import WalletScreen from '../Containers/WalletContainer/WalletScreen';
import LogoTitle from '../Components/ItemComponent/LogoTitle';
import AccountButton from '../Components/ButtonComponent/AccountButton';
import InforButton from '../Components/ButtonComponent/InforButton';

const WalletStack = createStackNavigator({
  Wallet: {
    screen: WalletScreen
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

export default WalletStack
