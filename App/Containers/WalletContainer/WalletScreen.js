import React, { useState } from 'react';
import Styles from './Styles/WalletScreenStyles';
import { Tab, Tabs, TabHeading } from 'native-base';
import { View, Text } from 'react-native';
import DepositScreen from './DepositScreen';
import WithdrawScreen from './WithdrawScreen';
import BalanceHistoryScreen from './BalanceHistoryScreen';

const WalletScreen = React.memo(props => {
  const [tab, setTab] = useState(0);

  function onChangeTab(evt) {
    setTab(evt.i);
  }

  return (
    <View style={Styles.container}>
      <Tabs
        tabContainerStyle={Styles.tabContainer}
        tabBarUnderlineStyle={Styles.tabsView}
        onChangeTab={(evt) => onChangeTab(evt)}>
        <Tab
          heading={<TabHeading style={Styles.headerLeftView}>
            <View style={[Styles.tabHeaderLeftInnerView, tab === 0 ? Styles.activeTab : null]}>
              <Text style={tab === 0 ? Styles.tabActiveText : Styles.tabText}>Deposit</Text>
            </View>
          </TabHeading>}>
          <DepositScreen />
        </Tab>
        <Tab
          heading={<TabHeading style={Styles.headerCenterView}>
            <View style={[Styles.tabHeaderCenterInnerView, tab === 1 ? Styles.activeTab : null]}>
              <Text style={tab === 1 ? Styles.tabActiveText : Styles.tabText}>Withdraw</Text>
            </View>
          </TabHeading>}>
          <WithdrawScreen />
        </Tab>
        <Tab
          heading={<TabHeading style={Styles.headerRightView}>
            <View style={[Styles.tabHeaderRightInnerView, tab === 2 ? Styles.activeTab : null]}>
              <Text style={tab === 2 ? Styles.tabActiveText : Styles.tabText}>Lottery</Text>
            </View>
          </TabHeading>}>
          <BalanceHistoryScreen />
        </Tab>
      </Tabs>
    </View >);
})

export default WalletScreen;