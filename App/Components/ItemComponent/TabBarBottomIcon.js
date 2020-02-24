import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles/TabBarBottomIconStyles';
import { View, Image, Text } from 'react-native';
import homeActive from '../../Images/TabbarIcon/home-active.png';
import homeInactive from '../../Images/TabbarIcon/home-inactive.png';
import buyActive from '../../Images/TabbarIcon/market-active.png';
import buyInactive from '../../Images/TabbarIcon/market-inactive.png';
import ticketActive from '../../Images/TabbarIcon/ticket-active.png';
import ticketInactive from '../../Images/TabbarIcon/ticket-inactive.png';
import drawingActive from '../../Images/TabbarIcon/drawing-active.png';
import drawingInactive from '../../Images/TabbarIcon/drawing-inactive.png';
import walletActive from '../../Images/TabbarIcon/wallet-active.png';
import walletInactive from '../../Images/TabbarIcon/wallet-inactive.png';


const TabBarBottomIcon = props => {
  const { focused, routeName } = props;

  const renderInactiveIcon = () => {
    switch (routeName) {
      case 'Home':
        return homeInactive;
      case 'Buy':
        return buyInactive;
      case 'Ticket':
        return ticketInactive;
      case 'Drawing':
        return drawingInactive;
      case 'Wallet':
        return walletInactive;
      default:
        iconName = ''
        return '';
    }
  }

  const renderActiveIcon = () => {
    switch (routeName) {
      case 'Home':
        return homeActive;
      case 'Buy':
        return buyActive;
      case 'Ticket':
        return ticketActive;
      case 'Drawing':
        return drawingActive;
      case 'Wallet':
        return walletActive;
      default:
        iconName = ''
        return '';
    }
  }

  return (
    <View style={Styles.container}>
      <Image
        style={Styles.iconStyles}
        source={focused ? renderActiveIcon() : renderInactiveIcon()}
      />
    </View>
  )
}

TabBarBottomIcon.propTypes = {
  focused: PropTypes.bool,
  routeName: PropTypes.string
}

export default TabBarBottomIcon