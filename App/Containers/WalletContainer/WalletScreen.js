import React from 'react';
import Styles from './Styles/WalletScreenStyles';
import { Tab, Tabs } from 'native-base';
import { View } from 'react-native';
import DepositScreen from './DepositScreen';
import WithdrawScreen from './WithdrawScreen';

const WalletScreen = React.memo(props => {

  return (
    <View style={Styles.container}>
      <Tabs>
        <Tab heading='Deposit'
          tabStyle={Styles.tabView}
          activeTabStyle={Styles.activeTab}
          textStyle={Styles.tabText}
          activeTextStyle={Styles.tabActiveText}>
          <DepositScreen />
        </Tab>
        <Tab heading='Withdraw'
          tabStyle={Styles.tabView}
          activeTabStyle={Styles.activeTab}
          textStyle={Styles.tabText}
          activeTextStyle={Styles.tabActiveText}>
          <WithdrawScreen />
        </Tab>
      </Tabs>
    </View >);
})

export default WalletScreen;