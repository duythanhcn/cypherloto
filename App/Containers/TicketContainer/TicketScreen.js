import React, { useState } from 'react';
import Styles from './Styles/TicketScreenStyles';
import { Tab, Tabs, TabHeading } from 'native-base';
import { View, Text } from 'react-native';
import TicketActiveScreen from './TicketActiveScreen';
import TicketPlayedScreen from './TicketPlayedScreen';

const TicketScreen = React.memo(props => {
  const [tab, setTab] = useState(0);

  function onChangeTab(evt) {
    setTab(evt.i);
  }

  return (
    <View style={Styles.container}>
      <Tabs
        tabBarUnderlineStyle={Styles.tabView}
        onChangeTab={(evt) => onChangeTab(evt)}>
        <Tab heading={<TabHeading style={Styles.headerLeftView}>
          <View style={[Styles.tabHeaderLeftInnerView, tab === 0 ? Styles.activeTab : null]}>
            <Text style={tab === 0 ? Styles.tabActiveText : Styles.tabText}>Active</Text>
          </View>
        </TabHeading>}>
          <TicketActiveScreen />
        </Tab>
        <Tab
          heading={<TabHeading style={Styles.headerRightView}>
            <View style={[Styles.tabHeaderRightInnerView, tab === 1 ? Styles.activeTab : null]}>
              <Text style={tab === 1 ? Styles.tabActiveText : Styles.tabText}>Played</Text>
            </View>
          </TabHeading>}>
          <TicketPlayedScreen />
        </Tab>
      </Tabs>
    </View >);
})

export default TicketScreen;