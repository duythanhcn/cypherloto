import React, { useEffect } from 'react';
import Styles from './Styles/TicketScreenStyles';
import { Container, Header, Tab, Tabs, TabHeading } from 'native-base';
import { View, Text } from 'react-native';
import TicketActiveScreen from './TicketActiveScreen';
import TicketPlayedScreen from './TicketPlayedScreen';

const TicketScreen = React.memo(props => {

  function renderTab(text) {
    return (
      <TabHeading>
        <Text>{text}</Text>
      </TabHeading>
    )
  }
  return (
    <View style={Styles.container}>
      <Tabs
        tabBarUnderlineStyle={{}}>
        <Tab heading={renderTab('Active')} >
          <TicketActiveScreen />
        </Tab>
        <Tab heading={renderTab('Played')}>
          <TicketPlayedScreen />
        </Tab>
      </Tabs>
    </View>);
})

export default TicketScreen;