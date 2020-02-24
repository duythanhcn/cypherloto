import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Styles from './Styles/SlideMenuStyles';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={Styles.container}>

      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;