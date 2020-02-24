import React from 'react';
import { createStackNavigator } from 'react-navigation';
import TicketScreen from '../Containers/TicketContainer/TicketScreen';
import LogoTitle from '../Components/ItemComponent/LogoTitle';
import AccountButton from '../Components/ButtonComponent/AccountButton';
import InforButton from '../Components/ButtonComponent/InforButton';

const TicketStack = createStackNavigator({
  Ticket: {
    screen: TicketScreen
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

export default TicketStack
