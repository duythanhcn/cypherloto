import React from 'react';
import Styles from './Styles/TicketScreenStyles';
import { Tab, Tabs } from 'native-base';
import { View } from 'react-native';
import TicketActiveScreen from './TicketActiveScreen';
import TicketPlayedScreen from './TicketPlayedScreen';

const TicketScreen = React.memo(props => {

  return (
    <View style={Styles.container}>
      <Tabs>
        <Tab heading='Active'
          tabStyle={Styles.tabView}
          activeTabStyle={Styles.activeTab}
          textStyle={Styles.tabText}
          activeTextStyle={Styles.tabActiveText}>
          <TicketActiveScreen />
        </Tab>
        <Tab heading='Played'
          tabStyle={Styles.tabView}
          activeTabStyle={Styles.activeTab}
          textStyle={Styles.tabText}
          activeTextStyle={Styles.tabActiveText}>
          <TicketPlayedScreen />
        </Tab>
      </Tabs>
    </View >);
})

export default TicketScreen;